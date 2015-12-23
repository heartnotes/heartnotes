"use strict";

import Q from 'bluebird';
import _ from 'lodash';
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

  constructor(credentials) {
    this.logger = Logger.create(`auth`);
    this._originalCredentials = credentials || {};
    this._credentials = null;
  }


  /** 
   * @return {Promise}
   */
  login (username, password) {
    Dispatcher.login('start');

    return Api.get('credentials', {
      username: username,
    })
      .then((credentials) => {
        this.logger.debug('Got credentials', credentials);

        if (!_.get(credentials, 'salt')) {
          throw new Error('User not found');
        }

        this._originalCredentials = credentials;

        return this.enterPassword(password);
      })
      .then(() => {
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
  createPassword(password) {
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

                this._credentials = this._originalCredentials 
                  = this._buildCredentials(encKeyBundle, derivedKeyData);
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

    let credentials = this._originalCredentials;

    return Crypto.deriveKey(password, {
      salt: credentials.salt,
      iterations: credentials.iterations,
    })
      .then((derivedKeyData) => {
        let masterKey = derivedKeyData.key1,
          authKey = derivedKeyData.key2;

        let encKeyBundle = (credentials.version) ? credentials.bundle : credentials.keyTest;

        return Crypto.decrypt(masterKey, encKeyBundle)
          .catch((err) => {
            throw new Error('Password incorrect');
          })
          .then((plainData) => {
            if (!credentials.version) {
              if (plainData !== masterKey) {
                throw new Error('Password incorrect');
              }              

              this._encryptionKey = masterKey;

              this._credentials = _.pick(credentials, 'salt', 'iterations');

              // upgrade to newer format
              return this._generateEncKeyBundle(masterKey, masterKey)
                .then((encKeyBundle) => {
                  this._credentials.bundle = encKeyBundle;
                  this._credentials.version = Detect.version();
                });
            } else {
              if (plainData.check !== 'ok') {
                throw new Error('Password incorrect');
              }

              this._credentials = credentials;
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
            this._masterKey = masterKey;
            this._authKey = authKey;
            this._password = newPassword;
            
            this._credentials = this._originalCredentials 
              = this._buildCredentials(encKeyBundle, derivedKeyData);

            Dispatcher.changePassword('result');
          });
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.changePassword('error', err);

        throw err;
      });
  }

  
  /**
   * @return {Promise}
   */
  _authWithServer (username) {
    Dispatcher.authWithServer('start');

    this._authenticatedWithServer = false;

    return Api.post('login', {
      user: username,
      key: this.authKey,
    })
      .then(() => {
        this._authenticatedWithServer = true;

        Dispatcher.authWithServer('result');
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.authWithServer('error', err);        

        throw err;
      });
  }


  /**
   * Use this when decrypting entries
   */
  get originalMeta () {
    return this._originalCredentials;
  }

  /**
   * Use this one when saving a diary.
   */
  get credentials () {
    if (!this._credentials) {
      throw new Error('Meta not yet calculated');
    }

    return this._credentials;
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


  _generateEncKeyBundle (masterKey, encryptionKey) {
    return Crypto.encrypt(masterKey, {
      key: encryptionKey,
      check: 'ok',  /* for checking password when we decrypt later on */
    });
  }

  _buildCredentials (encKeyBundle, derivedKeyData) {
    return {
      bundle: encKeyBundle,
      salt: derivedKeyData.salt,
      iterations: derivedKeyData.iterations,              
      version: Detect.version(),
    };
  }
}


