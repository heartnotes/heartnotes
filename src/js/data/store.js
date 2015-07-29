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
    _.delay( () => {
      this.setState(attrs);
    }, delayMs);
  }

  setStateAndChangeAfterDelay (state1, state2, delayMs = 1000) {
    this.setState(state1);

    this.setStateAfterDelay(state2, delayMs);
  }

}


