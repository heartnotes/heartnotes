"use strict";

var LocalStorage = require('./localStorage');


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.local = new LocalStorage(this.logger.create('LocalStorage'));

    this.keyData = null;
  }



  lastDataFile() {
    var name = this.local.get('last datafile');

    return this.loadDataFile(name);
  }



  saveDataFile(name, data) {
    data.filename = name;
    this.local.set(`datafile${name}`, data);

    this.local.set('last datafile', name);
  }


  loadDataFile(name) {
    return this.local.get(`datafile${name}`);
  }


}


