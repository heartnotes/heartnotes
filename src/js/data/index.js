var _ = require('lodash');

var StorageManager = require('./storage/index');

var actions = require('./actions');

var stores = {
  app: require('./appStore'),
  entries: require('./entryStore'),
  csrng: require('./crypto/csrngStore'),
  user: require('./userStore'),
};



export default class FluxManager extends Flux {
  constructor(logger) {
    super();

    this.logger = logger;
    this.storage = new StorageManager(this, this.logger.create('Storage'));

    _.forEach(actions, function(klass, name) {
      this.createActions(name, klass, this, this.logger.create('action:' + name));
    }, this);

    _.forEach(stores, function(klass, name) {
      this.createStore(name, klass, this, this.logger.create('store:' + name));
    }, this);
  }

}


