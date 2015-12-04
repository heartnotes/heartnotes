"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';
import { Actions } from '../actions';
import { instance as Dispatcher } from '../dispatcher';


export class AuthManager {

  constructor() {
    this.logger = Logger.create(`auth`);
  }


  /** 
   * @return {Promise}
   */
  createPassword(password) {
    Dispatcher.do(Actions.DERIVE_KEYS_START, {
      password: password
    });

    return Crypto.deriveNewKey(password) 
      .then((derivedKeyData) => {
        let masterKey = derivedKeyData.key1;

        // hash the password
        return Crypto.hash(password)
          .then((hash) => {
            // now genereate encryption key
            return Crypto.deriveNewKey(hash);
          })
          .then((encryptionKeyData) => {
            // now encrypt the encryption key with master key
            return Crypto.encrypt(masterKey, {
              key: encryptionKeyData.key1,
              check: 'ok',  /* for checking password when we decrypt later on */
            })
              .then((encryptionKeyBundle) => {
                Dispatcher.do(Actions.DERIVE_KEYS_RESULT);

                this._password = password;
                this._masterKey = masterKey;
                this._encryptionKey = encryptionKeyBundle.key1;
                this._meta = {
                  encKeyBundle: encryptionKeyBundle,
                  salt: derivedKeyData.salt,
                  iterations: derivedKeyData.iterations,              
                };
              });
          });
      })
      .catch((err) => {
        Dispatcher.do(Actions.DERIVE_KEYS_ERROR, err);

        throw err;
      });
  }



  /** 
   * @return {Promise}
   */
  enterPassword(password, meta) {
    Dispatcher.do(Actions.DERIVE_KEYS_START, {
      password: password,
    });

    return Crypto.deriveKey(password, {
      salt: meta.salt,
      iterations: meta.iterations,
    })
      .then((derivedKeyData) => {
        let masterKey = derivedKeyData.key1;

        let encKeyBundle = (meta.format) ? meta.encKeyBundle : meta.keyTest;

        return Crypto.decrypt(masterKey, encKeyBundle)
          .then((plainData) => {
            if (!meta.format) {
              if (plainData !== masterKey) {
                throw new Error('Password incorrect');
              }              

              this._encryptionKey = masterKey;

            } else {
              if (plainData.check !== 'ok') {
                throw new Error('Password incorrect');
              }

              this._encryptionKey = plainData.key;
            }

            this._password = password;
            this._masterKey = masterKey;
            this._meta = meta;

            Dispatcher.do(Actions.DERIVE_KEYS_RESULT);            
          })
          .catch((err) => {
            Dispatcher.do(Actions.DERIVE_KEYS_ERROR, err);

            throw err;
          });
      });
  }


  get meta () {
    return this._meta;
  }

  get password () {
    return this._password;
  }

  get masterKey () {
    return this._masterKey;
  }

  get encryptionKey () {
    return this._encryptionKey;
  }

}



AuthManager.instance = new AuthManager();

