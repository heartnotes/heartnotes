"use strict";


operative.setBaseURL(location.origin + '/js');


export default class WebWorker {
  constructor (func, logger) {
    this.worker = operative(func, [
      'worker.js'
    ]);

    this.logger = logger;
  }


  run (...args) {
    var self = this;

    self.logger.debug('run');

    return new Promise(function(resolve, reject) {
      args.push(function(err, data) {
        if (err) {
          err = '' + err;

          self.logger.error(err);

          reject(new Error(err));
        } else {
          self.logger.debug('success');

          resolve(data);
        }
      });

      try {
        self.worker.apply(self.worker, args);
      } catch (err) {
        self.logger.error(err);

        reject(err);
      }
    });
  }
}


