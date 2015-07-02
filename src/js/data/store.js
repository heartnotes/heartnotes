"use strict";

var _ = require('lodash');
var FlummoxStore = require('flummox').Store;

export default class Store extends FlummoxStore {

  constructor(flux, logger) {
    super();

    this.flux = flux;
    this.logger = logger;
    this.storage = flux.storage;
  }


  registerActionIds(actionName) {
    const actionIds = this.flux.getActionIds(actionName);

    this.logger.debug(`${actionName} action ids`, actionIds);

    _.forEach(actionIds, function(aid, key) {
      this.register(aid, this[key]);
    }, this);
  }


  setStateAfterDelay (attrs, delayMs) {
    _.delay(_.bind(function() {
      this.setState(attrs);
    }, this), delayMs);
  }

}


