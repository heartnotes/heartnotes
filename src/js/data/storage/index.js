"use strict";

var ipc = require('ipc');

var LocalStorage = require('./localStorage');

const LAST_DATAFILE_KEY = 'last datafile';


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.local = new LocalStorage(this.logger.create('LocalStorage'));

    this.keyData = null;
  }


  getLastAccessedDataFileName() {
    return this.local.get(LAST_DATAFILE_KEY);
  }


  /**
   * @return {Promise}
   */
  createNewFile(data) {
    this.logger.debug('create new file');

    var file = ipc.sendSync('synchronous-message', 'saveNewFile');

    console.log(file);

    return Promise.resolve(file);

    // data.name = name;
    // this.local.set(`datafile_${name}`, data);

    // this.local.set(LAST_DATAFILE_KEY, name);

    // return data;
  }


  saveFileMetadata(name, data) {
    this.logger.debug('save file metadata', name);

    data.name = name;
    this.local.set(`datafile_${name}`, data);

    this.local.set(LAST_DATAFILE_KEY, name);

    return data;
  }


  loadFileMetadata(name) {
    this.logger.debug('load file metadata', name);

    return this.local.get(`datafile_${name}`);
  }


  loadFileData (name) {
    this.logger.debug('load data', name);

    return this.local.get(`entries_${name}`);
  }


  saveFileData (name, saveData) {
    this.logger.debug('save data', name, saveData.length + ' chars');

    return this.local.set(`entries_${name}`, saveData);
  }

}


