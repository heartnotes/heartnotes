"use strict";

var FlummoxStore = require('flummox').Store;

export default class Store extends FlummoxStore {

  constructor(flux, logger) {
    super();

    this.logger = logger;
    this.storage = flux.storage;
  }
}


