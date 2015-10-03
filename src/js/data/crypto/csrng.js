"use strict";

var sjcl = require('./sjcl');

import { Timer } from 'clockmaker';


var randomNumGenerator = sjcl.random;



/** 
 * Cryptographic PRNG data generator.
 */
export default class Csrng {
  constructor (logger) {
    this.logger = logger.create('csrng');

    this._initEntropyCollector();

    this.state = {
      needEntropy: true
    };
  }


  _hasEntropy () {
    return !(randomNumGenerator.isReady() === randomNumGenerator._NOT_READY);
  }


  _initEntropyCollector () {
    this.logger.info('starting entropy collection...');

    randomNumGenerator.setDefaultParanoia(10);
    randomNumGenerator.startCollectors();

    // poll until we have entropy
    this._entropyCollectorTimer = Timer(function(timer) {

      this.logger.debug('check entropy level');

      var needEntropy = !(this._hasEntropy());

      // update state if necessary
      if (needEntropy) {
        this.logger.info('waiting for entropy');

        this.state.needEntropy = true;
      } else {
        this.logger.info('got entropy');

        this.state.needEntropy = false;

        // don't need to check anymore
        timer.stop();
      }

    }, 100, {
      repeat: true,
      thisObj: this
    })
      .start();
  }


  /**
   * Get random bytes.
   *
   * NOTE: One Word equals 32 bits or 4 bytes.
   *
   * @param [numBytes] {Number} no. of bytes to get. Defaults to 32.
   * @return {Promise} resolved with an Array of values if successful.
   */
  getRandomBytes (numBytes = 32) {
    var self = this;

    self.logger.debug('get random bytes', numBytes);

    return new Promise(function(resolve, reject) {
      Timer(function(timer) {
        if (this._hasEntropy()) {
          timer.stop();

          resolve();
        }
      }, 100, {
        repeat: true,
        thisObj: self
      })
        .start();
    })
      .then(function() {
        return randomNumGenerator.randomWords(numBytes / 4);
      });
  }
}



