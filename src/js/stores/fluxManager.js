var _ = require('lodash');

import { Flux } from 'flummox';

var actions = require('./actions');

var stores = {
  entries: require('./entryStore'),
  cryptoRandom: require('./crypto/random'),
};


export default class FluxManager extends Flux {
  constructor(logger) {
    super();

    this.logger = logger;

    _.forEach(actions, function(klass, name) {
      this.createActions(name, klass, this.logger.create('action:' + name));
    }, this);

    _.forEach(stores, function(klass, name) {
      this.createStore(name, klass, this, this.logger.create('store:' + name));
    }, this);
  }

}


