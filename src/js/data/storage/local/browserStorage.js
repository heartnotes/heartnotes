"use strict";

import Q from 'bluebird';
import StringUtils from '../../../utils/string';



export default class BrowserStorage {

  constructor(logger) {
    this.logger = logger.create('browser');
  }

  loadSettings (diaryId) {
    this.set('last accessed', diaryId);

    return Q.resolve(this.get(`${diaryId} settings`));
  }

  saveSettings (diaryId, settings) {
    this.set('last accessed', diaryId);

    return Q.resolve(this.set(`${diaryId} settings`, settings));
  }

  loadEntries (diaryId) {
    this.set('last accessed', diaryId);

    return Q.resolve(this.get(`${diaryId} entries`));
  }

  saveEntries (diaryId, entries) {
    this.set('last accessed', diaryId);

    return Q.resolve(this.set(`${diaryId} entries`, entries));
  }

  getLastAccessed () {
    return this.get('last accessed');
  }

  get (key) {
    try {
      var value = window.localStorage.getItem(key);

      this.logger.debug('get', key, 
        value ? (value.length < 512 ? value : `(${value.length} bytes)`) : value
      );

      return JSON.parse(value);
    } catch (err) {
      this.logger.error('get', key, err);      

      return undefined;
    }
  }


  set (key, value) {
    try {
      value = JSON.stringify(value);
      
      this.logger.debug('set', key, 
        value.length < 512 ? value : `(${value.length} bytes)`
      );

      return window.localStorage.setItem(key, value);
    } catch (err) {
      this.logger.error('set', key, err);      
    }
  }
}


