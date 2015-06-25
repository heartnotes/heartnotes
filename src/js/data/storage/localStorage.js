"use strict";


const PREFIX = 'heartnote_';


export default class LocalStorage {

  constructor(logger) {
    this.logger = logger;
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


