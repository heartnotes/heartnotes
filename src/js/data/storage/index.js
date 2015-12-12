"use strict";

import _ from 'lodash';
import moment from 'moment';

import Logger from '../../utils/logger';
import BrowserStorage from './browser';
import ElectronDiskStorage from './disk';

import Detect from '../../utils/detect';
import Diary from '../diary/index';


const LAST_ACCESSED_DIARY_KEY = 'last_accessed';


export class StorageManager {

  constructor() {
    this.logger = Logger.create('storage');

    this._localStorage = new BrowserStorage(this.logger);

    if (Detect.isElectronApp()) {
      this._backupStorage = new ElectronDiskStorage(this.logger);
    }
  }


  get localStorage () {
    return this._localStorage;
  }


  get backupStorage () {
    return this._backupStorage;
  }


  /**
   * @return {Promise}
   */
  createNewDiary (data) {
    this.logger.info('create new');

    return this.storage.createNewDiary(data)
      .then((diaryName) => {
        if (!diaryName) {
          throw new Error('Please choose a location to save the file in.');
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




