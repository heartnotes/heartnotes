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

  constructor() {
    this.logger = Logger.create('storage');

    this.browserStorage = new BrowserStorage(this.logger);
    this.fileStorage = new FileStorage(this.logger);

    this.storage = (Detect.isElectronApp() ? this.fileStorage : this.browserStorage);

    this._cache = {};
  }




  /**
   * @return {Promise}
   */
  createNewDiary (meta) {
    this.logger.info('create new');

    let data = {
      meta: meta
    };

    return this.storage.createNewDiary(data)
      .then((diaryName) => {
        if (!diaryName) {
          throw new Error('Failed to create new diary');
        }

        return this.loadDiary(diaryName);
      });
  }


  loadDiary (diaryName) {
    this._loadDiary(diaryName)
      .then((data) => {
        return new Diary(diaryName, data);
      })
  }


  selectDiary() {
    return this.storage.selectDiary();
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




