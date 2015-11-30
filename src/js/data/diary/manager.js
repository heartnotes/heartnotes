"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

import BrowserStorage from './browser';
import FileStorage from './file';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';



const LAST_ACCESSED_DIARY_KEY = 'last datafile';


export class DiaryManager {

  constructor(storage, data = {}) {
    this.storage = storage;

    this._name = data.name;
    this._entries = data.entries || {};
    this._meta = data.meta;
    this._derivedKeys = {};

    this.logger = Logger.create(`diary[${this.name}]`);
  }


  get encryptionKey () {
    return this._derivedKeys.key1;
  }


  /**
   * @return {Promise}
   */
  saveEntry (entry) {
    if (!this.loaded()) {
      return Q.reject(new Error('Diary not loaded'));
    }

    return Crypto.encrypt(this.encryptionKey, entry)
      .then((encryptedEntry) => {
        this.entries[entry.id] = encryptedEntry;

        return this.storage.saveDiary({
          name: this.name,
          data: {
            entries: this.entries,
            meta: this.meta,
          },
        });
      });
  }


  get meta () {
    return this._meta;
  }

  get name () {
    return this._name;
  }

  get entries () {
    return this._entries;
  }


  saveMetaDataToDiary(diaryName, metadata) {

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


  _setLastAccessedDiaryDetails (diaryName) {
    this.browserStorage.set(LAST_ACCESSED_DIARY_KEY, {
      name: diaryName,
      storage: this.storage.type(),
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




