"use strict";

import _ from 'lodash';
import moment from 'moment';

import Logger from '../../utils/logger';
import BrowserStorage from './browser';
import FileStorage from './file';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import Diary from '../diary/index';


const LAST_ACCESSED_DIARY_KEY = 'last datafile';


export class StorageManager {

  constructor(storage) {
    this.logger = Logger.create('storage');

    this.storage = storage;

    this.diary = null;
    this.entries = null;
    this.meta = null;
  }




  /**
   * @return {Promise}
   */
  createNewDiary (data) {
    this.logger.info('create new');

    return this.storage.createNewDiary(data)
      .then((diaryName) => {
        if (!diaryName) {
          throw new Error('Failed to create new diary');
        }

        if (diaryName) {
          this.name = diaryName;
          this.entries = _.get(data, 'entries', {});
          this.meta = data.meta;
        }

        return diar
      });
  }


  /**
   * @return {Promise}
   */
  createNewDiary(data) {
  }


  selectDiary() {
    return this.storage.selectDiary();
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


  /**
   * This just saves to internal cache without persisting.
   */
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




  loadDiary (diaryName) {
    this._loadDiary(diaryName)
      .then((data) => {
        return new Diary(this, data);
      })
  }


  getLastAccessedDiaryDetails () {
    this.browserStorage.get(LAST_ACCESSED_DIARY_KEY);
  }


  _setLastAccessedDiaryDetails (diaryName) {
    this.browserStorage.set(LAST_ACCESSED_DIARY_KEY, {
      name: diaryName,
      when: moment.valueOf(),
    });
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


}



exports.instance = new StorageManager();




