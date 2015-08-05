"use strict";


var BrowserStorage = require('./browser'),
    FileStorage = require('./file');

var Detect = require('../../utils/detect');


const LAST_ACCESSED_DIARY_KEY = 'last datafile';


export default class StorageManager {

  constructor(flux, logger) {
    this.logger = logger;

    this.browserStorage = new BrowserStorage(this.logger.create('browser'));
    this.fileStorage = new FileStorage(this.logger.create('file'));

    this.storage = (Detect.isElectronApp() ? this.fileStorage : this.browserStorage);
  }


  getLastAccessedDiaryDetails() {
    return this.browserStorage.get(LAST_ACCESSED_DIARY_KEY);
  }

  /**
   * @return {Promise}
   */
  createNewDiary(data) {
    this.logger.info('create new diary');

    return this.storage.createNewDiary(data)
      .then((diaryName) => {
        if (diaryName) {
          this._setLastAccessedDiaryDetails(diaryName);
        }
        
        return diaryName;
      });
  }


  selectDiary() {
    return this.storage.selectDiary();
  }



  loadMetaDataFromDiary(diaryName) {
    this.logger.info('load metadata', diaryName);

    return this.storage.loadMetaDataFromDiary(diaryName)
      .then( (data) => {
        this._setLastAccessedDiaryDetails(diaryName);
        
        return data;
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


  _setLastAccessedDiaryDetails (diaryName) {
    this.browserStorage.set(LAST_ACCESSED_DIARY_KEY, {
      name: diaryName,
      storage: this.storage.type(),
    });
  }
}


