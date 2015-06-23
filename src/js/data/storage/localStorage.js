"use strict";


const PREFIX = 'heartnote_';


export default class LocalStorage {

  constructor(logger) {
    this.logger = logger;
  }


  get (key) {
    try {
      var val = window.localStorage.getItem(PREFIX + key);

      this.logger.debug('get', key, 
        val ? (val.length < 512 ? val : `(${value.length} bytes)`) : val
      );

      return JSON.parse(val);
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


