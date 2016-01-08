"use strict";

import Q from 'bluebird';
import _ from 'lodash';
import moment from 'moment';

import Logger from '../../utils/logger';
import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';
import { instance as Api } from '../api/index';
import Diary from '../diary/index';
import { Actions } from '../actions';


/**
 * Authentication manager.
 */
export default class Auth {

  constructor(meta) {
    this.logger = Logger.create(`auth`);
    this._id = null;
    this._originalMeta = meta || {};
    this._meta = null;
  }


  buySubscription(pricing, cardDetails) {
    return new Q((resolve, reject) => {
      Dispatcher.pay('start');

      let Stripe = Dispatcher.getState().app.scripts.stripe.object;

      Stripe.setPublishableKey(
        Detect.inDevMode() 
          ? 'pk_test_ZCe4rNB0c3SQCmOwfIm8LNTa'
          : 'pk_live_APU9yltbkZwZcIRoK2XI9Yjd'
      );

      Dispatcher.pay('progress', 'Charging card...');

      Stripe.card.createToken({
        number: cardDetails.cardNumber,
        exp_month: cardDetails.expMonth,
        exp_year: cardDetails.expYear,
        cvc: cardDetails.cvc,
      }, (status, response) => {
        if (response.error) {
          Logger.error(response.error);

          let err = new Error('Unable to charge your card. Please check the details.');

          Dispatcher.pay('error', err);

          return reject(err);
        } else {
          Dispatcher.pay('progress', 'Verifying payment...');

          // response contains id and card, which contains additional card details
          let token = response.id;

          Api.post('verifyPayment', {}, {
            pricing: pricing,
            token: token
          })
            .then((accountData) => {
              this.updateAccountData(accountData);

              Dispatcher.pay('result', accountData);
              Dispatcher.alertUser('Subscription successful!');

              resolve();
            })
            .catch((err) => {
              Logger.error(response.error);

              Dispatcher.pay('error', err);

              return reject(err);
            });
        }
      });
    });
  }



  /** 
   * @return {Promise}
   */
  login (username, password) {
    Dispatcher.login('start');

    return Api.get('meta', {
      username: username,
    })
      .then((meta) => {
        this.logger.debug('Got meta', meta);

        if (!_.get(meta, 'salt')) {
          throw new Error('User not found');
        }

        this._originalMeta = meta;

        return this.enterPassword(password);
      })
      .then(() => {
        this._id = username;

        return this._authWithServer(username);
      })
      .then(() => {
        Dispatcher.login('result');
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.login('error', err);

        throw err;
      });
  }



  /** 
   * @return {Promise}
   */
  signUp (username, password) {
    Dispatcher.signUp('start');

    return this._createPassword(password)
      .then(() => {
        this._id = username;

        return Api.post('signUp', {}, {
          username: username,
          key: this.authKey,
          meta: this.meta,
        });
      })
      .then(() => {        
        Dispatcher.signUp('result');
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.signUp('error', err);

        throw err;
      });
  }


  /**
   * @return {Promise}
   */
  changePassword (oldPassword, newPassword) {
    Dispatcher.changePassword('start');

    return Q.resolve()
      .then(() => {
        if (this._password !== oldPassword) {
          throw new Error('Your current password is wrong');
        }
      })
      .then(() => {
        return Crypto.deriveNewKey(newPassword);
      })
      .then((derivedKeyData) => {
        let masterKey = derivedKeyData.key1,
          authKey = derivedKeyData.key2;

        return this._generateEncKeyBundle(masterKey, this._encryptionKey)
          .then((encKeyBundle) => {
            let newMeta = this._buildMeta(encKeyBundle, derivedKeyData);

            return Api.post('updatePassword', {}, {
              username: this._id,
              key: authKey,
              meta: newMeta,
            })
              .then(() => {
                this._masterKey = masterKey;
                this._authKey = authKey;
                this._password = newPassword;
                
                this._meta = this._originalMeta = newMeta;

                Dispatcher.changePassword('result');
              });
          });
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.changePassword('error', err);

        throw err;
      });
  }



  /**
   * Use this when decrypting entries
   */
  get originalMeta () {
    return this._originalMeta;
  }

  /**
   * Use this one when saving a diary.
   */
  get meta () {
    if (!this._meta) {
      throw new Error('Meta not yet calculated');
    }

    return this._meta;
  }

  get password () {
    return this._password;
  }

  get authKey () {
    return this._authKey;
  }

  get masterKey () {
    return this._masterKey;
  }

  get encryptionKey () {
    return this._encryptionKey;
  }

  get authenticatedWithServer () {
    return !!this._authenticatedWithServer;
  }

  get subscriptionActive() {
    return moment(this.subscriptionExpiry).valueOf() > Date.now();
  }

  get subscriptionType() {
    return _.get(this._accountData, 'subscription.type');
  }

  get subscriptionExpiry() {
    let expiry = _.get(this._accountData, 'subscription.expires', 0);

    return moment(expiry).toDate();
  }

  /** 
   * @return {Promise}
   */
  _createPassword(password) {
    Dispatcher.createPassword('start');

    return Crypto.deriveNewKey(password) 
      .then((derivedKeyData) => {
        let masterKey = derivedKeyData.key1,
          authKey = derivedKeyData.key2;

        // hash the password
        return Crypto.hash(password, Math.random() * 100000)
          .then((hash) => {
            // now genereate encryption key
            return Crypto.deriveNewKey(hash);
          })
          .then((encryptionKeyData) => {
            let encryptionKey = encryptionKeyData.key1;

            // now encrypt the encryption key with master key
            return this._generateEncKeyBundle(masterKey, encryptionKey)
              .then((encKeyBundle) => {
                Dispatcher.createPassword('result');

                this._password = password;
                this._masterKey = masterKey;
                this._authKey = authKey;
                this._encryptionKey = encryptionKey;

                this._meta = this._originalMeta 
                  = this._buildMeta(encKeyBundle, derivedKeyData);
              });
          });
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.createPassword('error', err);

        throw err;
      });
  }



  /** 
   * @return {Promise}
   */
  enterPassword(password) {
    Dispatcher.enterPassword('start');

    let meta = this._originalMeta;

    return Crypto.deriveKey(password, {
      salt: meta.salt,
      iterations: meta.iterations,
    })
      .then((derivedKeyData) => {
        let masterKey = derivedKeyData.key1,
          authKey = derivedKeyData.key2;

        let encKeyBundle = (meta.version) ? meta.bundle : meta.keyTest;

        return Crypto.decrypt(masterKey, encKeyBundle)
          .catch((err) => {
            throw new Error('Password incorrect');
          })
          .then((plainData) => {
            if (!meta.version) {
              if (plainData !== masterKey) {
                throw new Error('Password incorrect');
              }              

              this._encryptionKey = masterKey;

              this._meta = _.pick(meta, 'salt', 'iterations');

              // upgrade to newer format
              return this._generateEncKeyBundle(masterKey, masterKey)
                .then((encKeyBundle) => {
                  this._meta.bundle = encKeyBundle;
                  this._meta.version = Detect.version();
                });
            } else {
              if (plainData.check !== 'ok') {
                throw new Error('Password incorrect');
              }

              this._meta = meta;
              this._encryptionKey = plainData.key;
            }
          })
          .then(() => {
            this._password = password;
            this._masterKey = masterKey;
            this._authKey = authKey;
          })
          .then(() => {
            Dispatcher.enterPassword('result');            
          })
          .catch((err) => {
            this.logger.error(err);

            Dispatcher.enterPassword('error', err);

            throw err;
          });
      });
  }

  
  /**
   * @return {Promise}
   */
  _authWithServer (username) {
    Dispatcher.authWithServer('start');

    this._authenticatedWithServer = false;

    return Api.post('login', {}, {
      username: username,
      key: this.authKey,
    })
      .then((accountData) => {
        this.updateAccountData(accountData);

        Dispatcher.authWithServer('result', accountData);
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.authWithServer('error', err);        

        throw err;
      });
  }


  updateAccountData (accountData) {
    this._accountData = accountData;
    this._authenticatedWithServer = true;

    Dispatcher.accountDataUpdated(accountData);
  }


  _generateEncKeyBundle (masterKey, encryptionKey) {
    return Crypto.encrypt(masterKey, {
      key: encryptionKey,
      check: 'ok',  /* for checking password when we decrypt later on */
    });
  }

  _buildMeta (encKeyBundle, derivedKeyData) {
    return {
      bundle: encKeyBundle,
      salt: derivedKeyData.salt,
      iterations: derivedKeyData.iterations,              
      version: Detect.version(),
    };
  }
}


