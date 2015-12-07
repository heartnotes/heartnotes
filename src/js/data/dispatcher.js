"use strict";

import _ from 'lodash';
import Q from 'bluebird';
import Logger from '../utils/logger';

import { Actions, buildAction } from './actions';


export class Dispatcher {

  constructor() {
    this.logger = Logger.create('dispatch');
  }

  setup (dispatchFunction, getStateFunction) {
    this._dispatch = dispatchFunction;
    this._getState = getStateFunction;
  }



  initApp () {
    this._do(Actions.INIT);
  }


  alertUser (msg, type = 'info') {
    this._do(Actions.USER_ALERT, {
      type: type,
      msg: msg,
    });

    return Q.delay(2000).then(() => {
      this._do(Actions.USER_ALERT, {
        msg: null,
        type: null,
      });      
    });
  }


  checkForUpdates (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.CHECK_FOR_UPDATES_START, data);
      case 'result':
        return this._do(Actions.CHECK_FOR_UPDATES_RESULT, data);
      case 'error':
        return this._do(Actions.CHECK_FOR_UPDATES_ERROR, data);
    }
  }


  saveDiary (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.SAVE_DIARY_START, data);
      case 'result':
        return this._do(Actions.SAVE_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.SAVE_DIARY_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.SAVE_DIARY_RESET);          
        });
    }
  }


  chooseDiary (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.CHOOSE_DIARY_START, data);
      case 'result':
        return this._do(Actions.CHOOSE_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.CHOOSE_DIARY_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.CHOOSE_DIARY_RESET);          
        });
    }
  }



  createDiary (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.CREATE_DIARY_START, data);
      case 'result':
        return this._do(Actions.CREATE_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.CREATE_DIARY_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.CREATE_DIARY_RESET);          
        });
    }
  }



  openDiary (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.OPEN_DIARY_START, data);
      case 'result':
        return this._do(Actions.OPEN_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.OPEN_DIARY_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.OPEN_DIARY_RESET);          
        });
    }
  }



  updateEntry (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.UPDATE_ENTRY_START, data);
      case 'result':
        return this._do(Actions.UPDATE_ENTRY_RESULT, data);
      case 'error':
        this._do(Actions.UPDATE_ENTRY_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.UPDATE_ENTRY_RESET);          
        });
    }
  }



  deleteEntry (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.DELETE_ENTRY_START, data);
      case 'result':
        return this._do(Actions.DELETE_ENTRY_RESULT, data);
      case 'error':
        this._do(Actions.DELETE_ENTRY_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.DELETE_ENTRY_RESET);          
        });
    }
  }



  loadEntries (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.LOAD_ENTRIES_START, data);
      case 'progress':
        return this._do(Actions.LOAD_ENTRIES_PROGRESS, data);
      case 'result':
        return this._do(Actions.LOAD_ENTRIES_RESULT, data);
      case 'error':
        return this._do(Actions.LOAD_ENTRIES_ERROR, data);
    }
  }



  createPassword (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.DERIVE_KEYS_START, data);
      case 'result':
        return this._do(Actions.DERIVE_KEYS_RESULT, data);
      case 'error':
        this._do(Actions.DERIVE_KEYS_ERROR, data);
    }
  }




  buildSearchIndex (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.BUILD_SEARCH_INDEX_START, data);
      case 'result':
        return this._do(Actions.BUILD_SEARCH_INDEX_RESULT, data);
      case 'error':
        this._do(Actions.BUILD_SEARCH_INDEX_ERROR, data);
    }
  }



  enterPassword (state, data) {
    this.createPassword(state, data);
  }



  closeDiary () {
    this._do(Actions.CLOSE_DIARY);
  }




  _do (actionId, data) {
    if (!this._dispatch) {
      throw new Error('Dispatcher not yet initialized');
    }

    this._dispatch(buildAction(actionId, data));
  }
}


exports.instance = new Dispatcher();


