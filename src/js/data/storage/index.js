"use strict";

var _ = require('lodash');

var BrowserStorage = require('./browser'),
    FileStorage = require('./file');

var Detect = require('../../utils/detect');


const LAST_ACCESSED_DIARY_KEY = 'last datafile';


export class StorageManager {

  constructor() {
    this.logger = window.rootLogger.create('storage');

    this.browserStorage = new BrowserStorage(this.logger.create('browser'));
    this.fileStorage = new FileStorage(this.logger.create('file'));

    this.storage = (Detect.isElectronApp() ? this.fileStorage : this.browserStorage);

    this._cache = {};
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
          this._cache[diaryName] = data;
          this._setLastAccessedDiaryDetails(diaryName);
        }
        
        return diaryName;
      });
  }


  selectDiary() {
    return this.storage.selectDiary();
  }


  _loadDiary(diaryName) {
    this.logger.debug('load diary', diaryName);

    return Promise.resolve()
      .then(() => {
        if (!this._cache[diaryName]) {
          return this.storage.loadDiary(diaryName)
            .then((data) => {
              this._cache[diaryName] = data;

              return data;
            });
        } else {
          return this._cache[diaryName];
        }
      })
      .then((data) => {
        this._setLastAccessedDiaryDetails(diaryName);

        return data;
      });
  }



  loadMetaDataFromDiary(diaryName) {
    this.logger.info('load metadata', diaryName);

    return this._loadDiary(diaryName)
      .then( (data) => {
        return _.get(this._cache[diaryName], 'meta');
      });
  }


  saveMetaDataToDiary(diaryName, metadata) {
    this.logger.info('save metadata', diaryName);

    return this._loadDiary(diaryName)
      .then((data) => {
        data.meta = metadata;
      });
  }


  loadEntriesFromDiary (diaryName) {
    this.logger.info('load entries', diaryName);

    return this._loadDiary(diaryName)
      .then((data) => {
        return data.entries;
      });
  }


  saveEntriesToDiary (diaryName, entryData) {
    this.logger.info('save entries', diaryName, entryData.length + ' chars');

    return this._loadDiary(diaryName)
      .then((data) => {
        data.entries = entryData;
      });
  }


  persist (diaryName) {
    this.logger.info('persist to permanent storage', diaryName);

    return this._loadDiary(diaryName)
      .then((data) => {
        return this.storage.saveDiary(diaryName, data);
      });
  }



  exportToFile (content) {
   this.logger.info('export to file', content.length);

   return this.fileStorage.exportToFile(content);
  }


  _setLastAccessedDiaryDetails (diaryName) {
    this.browserStorage.set(LAST_ACCESSED_DIARY_KEY, {
      name: diaryName,
      storage: this.storage.type(),
    });
  }
}



exports.instance = new StorageManager();




