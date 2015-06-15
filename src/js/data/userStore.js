"use strict";

var _ = require('lodash');

var Store = require('./store'),
  Crypto = require('./crypto/index');


export default class UserStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.crypto = new Crypto(flux, logger.create('Crypto'));

    this.state = {
      passwordEntered: false,
      derivingKeys: false,
    };

    const userActionIds = flux.getActionIds('user');

    this.logger.debug('user action ids', userActionIds);

    _.forEach(userActionIds, function(aid, key) {
      this.register(aid, this[key]);
    }, this);
  }


  hasSavedPasswordData () {
    return this.storage.hasSavedPasswordData();
  }


  setNewPassword (params) {
    var self = this;

    var {password} = params;

    self.logger.debug('set new password', password);

    self.setState({
      derivingKeys: true
    });

    self.crypto.deriveNewKey(password)
      .then(function(keyData) {
        self.logger.info('keys derived', keyData);

        self.storage.setCurrentPasswordData(keyData);

        self.setState({
          derivingKeys: false,
          passwordEntered: true,
        });
      })
      .catch(function(err) {
        self.logger.error('keys derivation error', err);

        self.setState({
          derivingKeysError: err
        });
      });
  }
}


