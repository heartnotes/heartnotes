"use strict";

var _ = require('lodash');

var Store = require('./store'),
  Crypto = require('./crypto/index');


export default class UserStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.crypto = new Crypto(flux, logger.create('Crypto'));

    this.state = {
      derivedKeys: null,
      nowDerivingKeys: false,
    };

    const userActionIds = flux.getActionIds('user');

    this.logger.debug('user action ids', userActionIds);

    _.forEach(userActionIds, function(aid, key) {
      this.register(aid, this[key]);
    }, this);
  }


  lastDataFile () {
    return this.storage.lastDataFile();
  }


  saveNewDataFile (params) {
    var self = this;

    self._clearErrors();

    var {filePath, password} = params;

    self.logger.debug('save new datafile', filePath, password);

    self.setState({
      nowDerivingKeys: true
    });

    self.crypto.deriveNewKey(password)
      .then(function(keyData) {
        self.logger.info('keys derived', keyData);

        var dataFile = self.storage.saveDataFile(filePath, {
          salt: keyData.salt,
          iterations: keyData.iterations,
        })

        self.setState({
          nowDerivingKeys: false,
          dataFile: dataFile,
          derivedKeys: keyData,
        });
      })
      .catch(function(err) {
        self.logger.error('keys derivation error', err);

        self.setState({
          derivingKeysError: err
        });
      });
  }


  openDataFile (params) {
    var self = this;

    self._clearErrors();

    var {filePath, password} = params;

    self.logger.debug('open datafile', filePath, password);

    var datafile = self.storage.loadDataFile(filePath);

    if (!datafile) {
      return self.setState({
        openDataFileError: new Error('Data file not found: ' + filePath)
      });
    }

    self.setState({
      nowDerivingKeys: true
    });

    self.crypto.deriveKey(password, {
      salt: datafile.salt,
      iterations: datafile.iterations,
    })
      .then(function(keyData) {
        self.logger.info('keys derived', keyData);

        self.setState({
          nowDerivingKeys: false,
          dataFile: dataFile,
          derivedKeys: keyData,
        });
      })
      .catch(function(err) {
        self.logger.error('keys derivation error', err);

        self.setState({
          derivingKeysError: err
        });
      });
  }


  _clearErrors () {
    this.setState({
      derivingKeysError: null,
      openDataFileError: null,
    });
  }
}


