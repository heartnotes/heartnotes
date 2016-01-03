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




  login (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.LOGIN_START, data);
      case 'result':
        return this._do(Actions.LOGIN_RESULT, data);
      case 'error':
        this._do(Actions.LOGIN_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.LOGIN_RESET);          
        });
    }
  }


  signUp (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.SIGN_UP_START, data);
      case 'result':
        return this._do(Actions.SIGN_UP_RESULT, data);
      case 'error':
        this._do(Actions.SIGN_UP_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.SIGN_UP_RESET);          
        });
    }
  }


  authWithServer (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.AUTH_WITH_SERVER_START, data);
      case 'result':
        return this._do(Actions.AUTH_WITH_SERVER_RESULT, data);
      case 'error':
        this._do(Actions.AUTH_WITH_SERVER_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.AUTH_WITH_SERVER_RESET);          
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



  loadSettings (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.LOAD_SETTINGS_START, data);
      case 'result':
        return this._do(Actions.LOAD_SETTINGS_RESULT, data);
      case 'error':
        return this._do(Actions.LOAD_SETTINGS_ERROR, data);
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



  decryptEntries (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.DECRYPT_ENTRIES_START, data);
      case 'progress':
        return this._do(Actions.DECRYPT_ENTRIES_PROGRESS, data);
      case 'result':
        return this._do(Actions.DECRYPT_ENTRIES_RESULT, data);
      case 'error':
        return this._do(Actions.DECRYPT_ENTRIES_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.DECRYPT_ENTRIES_RESET);          
        });
    }
  }


  loadEntry (state, data) {
    switch (state) {
      case 'error':
        return this._do(Actions.LOAD_ENTRY_ERROR, data);
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


  changePassword (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.CHANGE_PASSWORD_START, data);
      case 'result':
        return this._do(Actions.CHANGE_PASSWORD_RESULT, data);
      case 'error':
        this._do(Actions.CHANGE_PASSWORD_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.CHANGE_PASSWORD_RESET);          
        });
    }
  }



  exportToFile (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.EXPORT_DATA_START, data);
      case 'result':
        return this._do(Actions.EXPORT_DATA_RESULT, data);
      case 'error':
        this._do(Actions.EXPORT_DATA_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.EXPORT_DATA_RESET);          
        });
    }
  }



  buildSearchIndex (state, data) {
    switch (state) {
      case 'start':
        this._startBg('rebuildSearch', 'Rebuilding search index...');
        return this._do(Actions.BUILD_SEARCH_INDEX_START, data);
      case 'result':
        this._stopBg('rebuildSearch');
        return this._do(Actions.BUILD_SEARCH_INDEX_RESULT, data);
      case 'error':
        this._stopBg('rebuildSearch');
        this._do(Actions.BUILD_SEARCH_INDEX_ERROR, data);
    }
  }


  search (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.SEARCH_START, data);
      case 'result':
        return this._do(Actions.SEARCH_RESULT, data);
      case 'error':
        this._do(Actions.SEARCH_ERROR, data);
    }
  }


  sync (state, data) {
    switch (state) {
      case 'start':
        return this._startBg('sync', 'Synchronizing with server...');
      case 'progress':
        return this._updateBg('sync', data);
      case 'result':
        return this._stopBg('sync');
    }
  }



  backup (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.BACKUP_START, data);
      case 'result':
        return this._do(Actions.BACKUP_RESULT, data);
      case 'error':
        this._do(Actions.BACKUP_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.BACKUP_RESET);          
        });
    }
  }



  restore (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.RESTORE_START, data);
      case 'progress':
        return this._do(Actions.RESTORE_PROGRESS, data);
      case 'result':
        return this._do(Actions.RESTORE_RESULT, data);
      case 'error':
        this._do(Actions.RESTORE_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.RESTORE_RESET);          
        });
    }
  }



  restoreFromOldDiary (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.RESTORE_FROM_OLD_START, data);
      case 'progress':
        return this._do(Actions.RESTORE_FROM_OLD_PROGRESS, data);
      case 'result':
        return this._do(Actions.RESTORE_FROM_OLD_RESULT, data);
      case 'error':
        this._do(Actions.RESTORE_FROM_OLD_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.RESTORE_FROM_OLD_RESET);          
        });
    }
  }



  sendFeedback (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.FEEDBACK_START, data);
      case 'result':
        return this._do(Actions.FEEDBACK_RESULT, data);
      case 'error':
        this._do(Actions.FEEDBACK_ERROR, data);

        return Q.delay(2000).then(() => {
          this._do(Actions.FEEDBACK_RESET);          
        });
    }
  }



  enterPassword (state, data) {
    this.createPassword(state, data);
  }



  closeDiary () {
    this._do(Actions.CLOSE_DIARY);
  }



  _startBg(taskId, desc) {
    this._do(Actions.BACKGROUND_TASK_START, {
      id: taskId,
      desc: desc,
      msg: 'In progres...',
    });
  }


  _updateBg(taskId, msg) {
    this._do(Actions.BACKGROUND_TASK_PROGRESS, {
      id: taskId,
      desc: desc,
      msg: msg,
    });
  }


  _stopBg(taskId) {
    this._do(Actions.BACKGROUND_TASK_STOP, {
      id: taskId,
    });
  }


  _do (actionId, data) {
    if (!this._dispatch) {
      throw new Error('Dispatcher not yet initialized');
    }

    this._dispatch(buildAction(actionId, data));
  }
}


exports.instance = new Dispatcher();


