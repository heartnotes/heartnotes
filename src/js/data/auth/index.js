"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';
import Diary from '../diary/index';
import { Actions } from '../actions';



export class Auth {

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
        return Crypto.hash(password, Math.random() * 100000)
          .then((hash) => {
            // now genereate encryption key
            return Crypto.deriveNewKey(hash);
          })
          .then((encryptionKeyData) => {
            let encryptionKey = encryptionKeyData.key1;

            // now encrypt the encryption key with master key
            return Crypto.encrypt(masterKey, {
              key: encryptionKey,
              check: 'ok',  /* for checking password when we decrypt later on */
            })
              .then((encKeyBundle) => {
                Dispatcher.do(Actions.DERIVE_KEYS_RESULT);

                this._password = password;
                this._masterKey = masterKey;
                this._encryptionKey = encryptionKey;
                this._meta = {
                  encKeyBundle: encKeyBundle,
                  salt: derivedKeyData.salt,
                  iterations: derivedKeyData.iterations,              
                  format: Diary.CURRENT_META_FORMAT,
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



Auth.instance = new Auth();

