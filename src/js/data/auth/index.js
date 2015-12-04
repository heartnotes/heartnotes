"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';
import { Actions } from '../actions';


export default class AuthManager {

  constructor(dispatcher) {
    this.logger = Logger.create(`auth`);

    this._password = null;
    this._derivedKeys = {};
  }


  /** 
   * @return {Promise}
   */
  setNewPassword(password) {
    Dispatcher.do(Actions.DERIVE_KEYS_START, {
      password: password
    });

    return Crypto.deriveNewKey(password) 
      .then((derivedKeyData) => {
        // encrypt key with itself to produce key checking value
        return Crypto.encrypt(derivedKeyData.key1, derivedKeyData.key1)
          .then((keyTest) => {
            Dispatcher.do(Actions.DERIVE_KEYS_RESULT);

            this._meta = {
              keyTest: keyTest,
              salt: derivedKeyData.salt,
              iterations: derivedKeyData.iterations,              
            };
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
    Dispather.do(Actions.DERIVE_KEYS_START, {
      password: password,
    });

    return Crypto.deriveKey(password, {
      salt: meta.salt,
      iterations: meta.iterations,
    })
      .then((derivedKeyData) => {
        this._derivedKeys = derivedKeyData;

        // now test that keys are correct
        return Crypto.decrypt(meta.key1, meta.keyTest)
          .then((plainData) => {
            if (plainData !== meta.key1) {
              throw new Error('Password incorrect');
            }

            this.meta = meta;
            this.password = password;
            
            Dispatcher.do(Actions.DERIVE_KEYS_RESULT, derivedKeyData);            
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

  get encryptionKey () {
    return this._derivedKeys.key1;
  }

}



export function new DiaryManager()
