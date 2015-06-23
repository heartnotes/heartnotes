"use strict";

var LocalStorage = require('./localStorage');

const LAST_DATAFILE_KEY = 'last datafile';


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.local = new LocalStorage(this.logger.create('LocalStorage'));

    this.keyData = null;
  }



  lastDataFile() {
    this.logger.debug('check last data file');
    
    var name = this.local.get(LAST_DATAFILE_KEY);

    return this.loadDataFile(name);
  }



  saveDataFile(name, data) {
    this.logger.debug('save data file', name);

    data.filename = name;
    this.local.set(`datafile_${name}`, data);

    this.local.set(LAST_DATAFILE_KEY, name);
  }


  loadDataFile(name) {
    this.logger.debug('load data file', name);

    return this.local.get(`datafile_${name}`);
  }


}


