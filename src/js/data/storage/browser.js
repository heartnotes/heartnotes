"use strict";

var StringUtils = require('../../utils/string');


const PREFIX = 'heartnote_';


export default class LocalStorage {

  constructor(logger) {
    this.logger = logger;
  }

  type () {
    return 'browser';
  }


  createNewDiary (data) {
    this.logger.debug('create new diary', data);

    var name = StringUtils.rand(8);

    this.set(`datafile_${name}`, data);

    return Promise.resolve(name);
  }



  selectDiary() {
    // nothing to do!!
    // TODO: perhaps we should refactor the userStore such that it's more 
    // intimately tied in with storage, to avoid this sort of empty function
  }


  loadMetaDataFromDiary (diaryName) {
    this.logger.debug('load metadata', diaryName);

    return Proimse.resolve(
      this.get(`datafile_${diaryName}`)
    );
  }



  loadEntriesFromDiary (diaryName) {
    this.logger.debug('load entries', diaryName);

    return Promise.resolve(
      this.get(`entries_${diaryName}`)
    );
  }


  saveEntriesToDiary (diaryName, entryData) {
    this.logger.debug('save entries', diaryName, entryData.length + ' chars');

    return this.set(`entries_${diaryName}`, entryData);
  }



  get (key) {
    try {
      var value = window.localStorage.getItem(PREFIX + key);

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

      return window.localStorage.setItem(PREFIX + key, value);
    } catch (err) {
      this.logger.error('set', key, err);      
    }
  }
}


