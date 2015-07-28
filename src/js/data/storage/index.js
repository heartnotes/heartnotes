"use strict";

var ipc = require('ipc');

var BrowserStorage = require('./browser'),
    FileStorage = require('./file');

var Detect = require('../../utils/detect');


const LAST_DATAFILE_KEY = 'last datafile';


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.browserStorage = new BrowserStorage(this.logger.create('browser'));
    this.fileStorage = new FileStorage(this.logger.create('file'));

    this.storage = (Detect.isElectronApp() ? this.fileStorage : this.browserStorage);
  }


  getLastAccessedDataFileName() {
    return this.browserStorage.get(LAST_DATAFILE_KEY);
  }

  /**
   * @return {Promise}
   */
  createNewDiary(data) {
    this.logger.info('create new diary');

    return this.storage.createNewFile(data)
      .then((diaryName) => {
        this.browserStorage.set(LAST_DATAFILE_KEY, diaryName);
        
        return diaryName;
      });
  }


  loadEntriesFromDiary (diaryName) {
    this.logger.info('load entries', diaryName);

    return this.storage.loadEntriesFromDiary(diaryName);
  }


  saveEntriesToDiary (diaryName, entryData) {
    this.logger.info('save entries', diaryName, entryData.length + ' chars');

    return this.storage.saveEntriesToDiary(diaryName, entryData);
  }



  loadFileMetadata(name) {
    this.logger.info('load file metadata', name);

    return this.local.get(`datafile_${name}`);
  }





}


