"use strict";

import Q from 'bluebird';
var StringUtils = require('../../utils/string');


const PREFIX = '';


export default class LocalStorage {

  constructor(logger) {
    this.logger = logger.create('browser');
  }

  type () {
    return 'browser';
  }


  createNewDiary (data) {
    this.logger.debug('create new diary', data);

    var name = StringUtils.rand(8);

    return this.saveDiary(diaryName, data)
      .then(() => {
        return name;
      });
  }



  selectDiary() {
    // nothing to do!!
    // TODO: perhaps we should refactor the userStore such that it's more 
    // intimately tied in with storage, to avoid this sort of empty function
  }


  loadDiary (diaryName) {
    this.logger.debug('load diary', diaryName);

    return Q.resolve(
      this.get(`diary_${diaryName}`)
    );
  }


  saveDiary (diaryName, data) {
    this.logger.debug('save diary', diaryName);

    return Q.resolve(
      this.set(`diary_${diaryName}`, data)
    );
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


