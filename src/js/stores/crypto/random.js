"use strict";

var sjcl = require('sjcl');

import { Timer } from 'clockmaker';
import { Store } from 'flummox';

var randomNumGenerator = sjcl.random;



/** 
 * Cryptographic PRNG data generator.
 */
export default class Random extends Store {
  constructor (flux, logger) {
    super();

    this.logger = logger;

    this.state = {
      gotEntropy: false
    };

    this._initEntropyCollector();

    this._pendingRequests = [];
  }



  _initEntropyCollector () {
    this.logger.info('starting entropy collection...');

    randomNumGenerator.setDefaultParanoia(10);
    randomNumGenerator.startCollectors();

    // poll until we have entropy
    this._entropyCollectorTimer = Timer(function(timer) {

      var needMoreEntropy = 
        (randomNumGenerator.isReady() === randomNumGenerator._NOT_READY);

      // update state if necessary
      if (needMoreEntropy) {
        this.logger.info('waiting for entropy');

        if (this.state.gotEntropy) {
          this.setState({
            gotEntropy: false
          });
        }
      } else {
        this.logger.info('got entropy');

        if (!this.state.gotEntropy) {
          this.setState({
            gotEntropy: true
          });

          // don't need to check anymore
          timer.stop();
        }
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
    this.logger.debug('get random bytes', numBytes);

    var self = this;

    return new Promise(function(resolve, reject) {
      Timer(function(timer) {
        if (self.state.gotEntropy) {
          timer.stop();

          resolve();
        }
      }, 3000, {
        repeat: true,
        this: thisObj
      })
        .start();
    })
      .then(function() {
        return randomNumGenerator.randomWords(numBytes / 4);
      });
  }
}



