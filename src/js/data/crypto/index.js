"use strict";

import { Timer } from 'clockmaker';
var WebWorker= require('../../utils/webWorker');

var sjcl = require('./sjcl');
  



/**
 * When deriving key from password keep iterating for this long to ensure a 
 * key of sufficient strength is derived.
 * @type {Number}
 */
const REQUIRED_STRENGTH_MS = 1000;





/** 
 * Cryptographic PRNG data generator.
 */
export default class Crypto {
  constructor (flux, logger) {
    super();

    this.logger = logger;
    this.csrng = flux.getStore('csrng');
  }


  /** 
   * Construct web worker for given crypto work.
   */
  _constructWorker (name, func) {
    this.logger.debug('construct worker');

    var logger = this.logger.create(`worker:${name}`);

    return new WebWorker(func, logger);
  }



  /**
   * Generate a new secure encryption key from given user password and salt.
   *
   * Returns:
   * 
   * ```js
   * { 
   *   authKey: 256-bit auth key as a hex string, 
   *   secureDataKey: 256-bit secure data key as hex string, 
   *   iterations: no. of PBKDF2 iterations used, 
   *   salt: salt as hex string
   * }
   * ```
   * 
   * @param password {string} user password.
   *
   * @return {Promise}
   */
  deriveNewKey (password) {
    this.logger.debug('derive new key', password);

    var self = this;

    return self.csrng.getRandomBytes()
      .then(function deriveKey(salt) {
        return self.deriveKey(password, {
          salt: sjcl.codec.hex.fromBits(salt),
          requiredStrengthMs: REQUIRED_STRENGTH_MS
        });
      })
    ;
  },


  /**
   * Derive key from existing password and algorithm options.
   *
   * Returns:
   * 
   * ```js
   * { 
   *   authKey: 256-bit auth key as a hex string, 
   *   secureDataKey: 256-bit secure data key as hex string, 
   *   iterations: no. of PBKDF2 iterations used, 
   *   salt: salt as hex string
   * }
   * ```
   * 
   * @param password {string} password input by the user.
   * @param algorithmParams {Object} key-derivation algorithm parameters.
   * @param algorithmParams.salt {string} salt as hex string.
   * @param [algorithmParams.iterations] {Number} no. of iterations to perform.
   * @param [algorithmParams.requiredStrengthMs] {Number} if set then the passed-in `iterations` will be ignored.
   * Instead, key derivation will be repeated until the time taken to derive the key is more than what is specified
   * in this parameter
   *
   * @return {Promise} 
   */
  deriveKey (password, algorithmParams) {
    this.logger.debug('derive key from', password, algorithmParams);

    var worker = this._constructWorker('deriveKey', function(data, cb) {
      try {
        var
          iterations = data.iterations || 10000,
          saltBits = sjcl.codec.hex.toBits(data.salt),
          timeElapsedMs = 0,
          key = null;

        do {
          // check time taken for previous calculation
          if (key) {
            if (0 === timeElapsedMs) {    // just in case it's super fast
              iterations *= 2;
            } else {
              // increaes iterations proportionately in line with required strength
              iterations = parseInt(iterations * data.requiredStrengthMs / timeElapsedMs, 10) + 1;
            }
          }

          var startTime = new Date();
          key = sjcl.misc.pbkdf2(data.password, saltBits, iterations, null, sjcl.misc.hmac512);
          timeElapsedMs = new Date().getTime() - startTime.getTime();

        } while (data.requiredStrengthMs && data.requiredStrengthMs > timeElapsedMs);

        cb(null, {
          authKey: sjcl.codec.hex.fromBits(key.slice(0, key.length / 2)),
          secureDataKey: sjcl.codec.hex.fromBits(key.slice(key.length / 2)),
          salt: data.salt,
          iterations: iterations
        });
      } catch (err) {
        cb(err);
      }
    });

    return worker.run({
      password: password,
      salt: algorithmParams.salt,
      iterations: algorithmParams.iterations,
      requiredStrengthMs: algorithmParams.requiredStrengthMs          
    });
  },


  /**
   * Perform AES 256-bit encryption on given data.
   *
   * @param key {string} 256-bit key as hex string.
   * @param data {*} data to encrypt - will be automatically passed through JSON.stringify().
   *
   * @return {Promise} resolves to cipherText
   */
  encrypt (key, data) {
    var self = this;

    self.logger.debug('encrypt', key, data.length);

    var password = sjcl.codec.hex.toBits(key);

    if (8 !== password.length) {
      return Promise.reject(new Error('Encryption password must be 8 bytes'));
    }

    var worker = self._constructWorker('encrypt', function(data, cb) {
      try {
        var r = sjcl.encrypt_b64(
          data.password, 
          JSON.stringify(data.plaintext), 
          data.initVector
        );

        cb(null, r);
      } catch (err) {
        cb(err);
      }
    });

    return this.csrng.getRandomBytes(16)
      .then(function doEncryption(initVector) {
        return worker.run({
          password: password,
          plaintext: plaintext,
          initVector: initVector              
        });
      });
  },




  /**
   * Perform AES 256-bit decryption on given data.
   *
   * @param key {string} 256-bit key as hex string.
   * @param ciphertext {*} data to decrypt.
   *
   * @return {Promise} resolves to plaintext (after passing through `JSON.parse()`).
   */
  decrypt (key, ciphertext) {
    this.logger.debug('decrypt', key, ciphertext.length);

    var password = sjcl.codec.hex.toBits(key);

    if (8 !== password.length) {
      return $q.reject(new CryptoError('Decryption password must be 256 bits'));
    }

    var worker = self._constructWorker('decrypt', function(data, cb) {
      try {
        var r = sjcl.decrypt_b64(
          data.password, 
          data.ciphertext
        );

        cb(null, JSON.parse(r));
      } catch (err) {
        cb(err);
      }
    });

    return worker.run({
      password: password,
      ciphertext: ciphertext
    });
  },

}



