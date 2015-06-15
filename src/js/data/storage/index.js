"use strict";

var LocalStorage = require('./localStorage');


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.local = new LocalStorage(this.logger.create('LocalStorage'));

    this.keyData = null;
  }


  hasSavedPasswordData() {
    return this.local.get('password');
  } 


  setCurrentPasswordData(keyData) {
    this.keyData = keyData;

    this.local.set('password', {
      salt: keyData.salt,
      iterations: keyData.iterations,
    });
  } 


}


