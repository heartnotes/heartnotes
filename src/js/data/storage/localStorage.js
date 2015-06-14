"use strict";


const PREFIX = 'heartnote_';


export default class LocalStorage {

  constructor(flux, logger) {
    this.logger = logger;
  }


  get (key) {
    return window.localStorage.getItem(PREFIX + key);
  }
}

