"use strict";

var LocalStorage = require('./localStorage');


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.local = new LocalStorage(this.logger.create('LocalStorage'));
  }


  /**
   * Get whether user has previously saved data file.
   * @return {Boolean}
   */
  hasDataFile() {
    return !!this.local.get('datafile');
  } 

}


