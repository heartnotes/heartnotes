"use strict";

import Q from 'bluebird';
import StringUtils from '../../../utils/string';



export default class BrowserStorage {

  constructor(logger) {
    this.logger = logger.create('browser');
  }

  createNewDiary (name, data = {}) {
    return Q.try(() => {
      data.name = name;

      this.logger.debug('create new diary', data);

      let id = `diary_${name}_${StringUtils.random(10)}`;

      this.set(id, data);

      let diaries = this.get('diaries');
      diaries = diaries || {};
      diaries[id] = name;
      this.set('diaries', diaries);

      this.set('last_opened', id);

      return this.loadDiary(id);
    });
  }


  loadDiary (diaryId) {
    this.logger.debug('load diary', diaryId);

    return Q.resolve(
      this.get(diaryId)
    )
      .then((data) => {
        this.set('last_opened', diaryId);

        return data;
      });
  }


  saveDiary (diaryId, data) {
    this.logger.debug('save diary', diaryId);

    return Q.resolve(
      this.set(diaryId, data)
    );
  }


  getLastOpened() {
    let id = this.get('last_opened');

    if (!id) {
      return null;
    }

    let list = this.getDiaryList();

    return {
      id: id,
      name: list[id],
    };
  }



  getDiaryList() {
    return this.get('diaries');
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


