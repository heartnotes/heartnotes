"use strict";

import _ from 'lodash';
import moment from 'moment';

import Logger from '../../utils/logger';
import BrowserStorage from './browser';
import FileStorage from './file';

import Detect from '../../utils/detect';
import Diary from '../diary/index';


const LAST_ACCESSED_DIARY_KEY = 'last_accessed';


export class StorageManager {

  constructor() {
    this.logger = Logger.create('storage');

    this.browserStorage = new BrowserStorage(this.logger);
    this.fileStorage = new FileStorage(this.logger);

    this.storage = (Detect.isElectronApp() ? this.fileStorage : this.browserStorage);
  }


  /**
   * @return {Promise}
   */
  createNewDiary (data) {
    this.logger.info('create new');

    return this.storage.createNewDiary(data)
      .then((diaryName) => {
        if (!diaryName) {
          let err = new Error('Please choose a location to save the file in.');

          this.logger.error(err);

          throw err;
        }

        return this.loadDiary(diaryName);
      });
  }


  /**
   * @return {Promise}
   */
  loadDiary (diaryName) {
    return this._loadDiary(diaryName)
      .then((data) => {
        return new Diary(diaryName, data);
      });
  }


  /**
   * @return {Promise}
   */
  saveDiary (diaryName, data) {
    this.logger.info('save diary', diaryName);

    return this.storage.saveDiary(diaryName, data);
  }


  selectDiary() {
    return this.storage.selectDiary();
  }



  exportToFile (content) {
   this.logger.info('export to file', content.length);

   return this.fileStorage.exportToFile(content);
  }


  getLastAccessedDiaryDetails () {
    return this.browserStorage.get(LAST_ACCESSED_DIARY_KEY);
  }


  _setLastAccessedDiaryDetails (diaryName) {
    this.browserStorage.set(LAST_ACCESSED_DIARY_KEY, {
      name: diaryName,
      when: moment.valueOf(),
    });
  }


  _loadDiary(diaryName) {
    this.logger.debug('load diary', diaryName);

    return this.storage.loadDiary(diaryName)
      .then((data) => {
        this._setLastAccessedDiaryDetails(diaryName);

        return data;
      })
      .catch((err) => {
        this.logger.error(err);

        err = new Error('There was an error loading the diary.');

        throw err;
      })
  }


}



exports.instance = new StorageManager();




