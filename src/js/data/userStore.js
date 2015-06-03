"use strict";


var Store = require('./store');


export default class UserStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.state = {
      hasDataFile: this.storage.hasDataFile(),
    };

    const userActionIds = flux.getActionIds('user');
    this.register(userActionIds.create, this.createDataFile);
    this.register(userActionIds.update, this.updateDataFile);
  }


  createDataFile () {}
  updateDataFile () {}
}


