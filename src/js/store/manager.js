var _ = require('lodash');

import { Flux } from 'flummox';

var actions = require('./actions'),
  stores = require('./stores');


export default class FluxManager extends Flux {
  constructor() {
    super();

    _.forEach(actions, function(klass, name) {
      this.createActions(name, klass);
    }, this);

    _.forEach(stores, function(klass, name) {
      this.createStore(name, klass, this);
    }, this);
  }
}


