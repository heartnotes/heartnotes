var operative = require('operative');

operative.setBaseURL('/js');


export default class WebWorker {
  constructor (func, logger) {
    this.worker = operative(func, [
      'webworker.js'
    ]);

    this.logger = logger;
  }


  run (...args) {
    var self = this;

    self.logger.debug('run');

    return new Promise(function(resolve, reject) {
      args.push(function(err, data) {
        if (err) {
          self.logger.error(err.stack);

          reject(err);
        } else {
          self.logger.debug('success', data);

          resolve(data);
        }
      });

      self.worker.apply(self.worker, args);
    });
  }
}


