"use strict";

import _ from 'lodash';
import Q from 'bluebird';
import Logger from '../utils/logger';

import { Actions, buildAction } from './actions';

const DEFAULT_TIMEOUT_DELAY = 3000;


export class Dispatcher {

  constructor() {
    this.logger = Logger.create('dispatch');

    this._timeout = {};
  }

  setup (dispatchFunction, getStateFunction) {
    this._dispatch = dispatchFunction;
    this._getState = getStateFunction;
  }

  _clearTimeout (id) {
    delete this._timeout[id];
  }

  _setTimeout (id, delay, func) {
    if (!func) {
      func = delay;
      delay = DEFAULT_TIMEOUT_DELAY;
    }

    let timeoutId = Math.random();

    this._timeout[id] = timeoutId;

    Q.delay(delay).then(() => {
      if (this._timeout[id] !== timeoutId) {
        return;
      }

      func();
    });
  }

  getState () {
    return this._getState();
  }


  initApp () {
    this._do(Actions.INIT);
  }

  screenChanged (details) {
    this._do(Actions.SCREEN_UPDATED, details);
  }


  alertUser (msg, type = 'mini') {
    this._clearTimeout('alertUser');

    this._do(Actions.USER_ALERT, {
      type: type,
      msg: msg,
    });

    return this._setTimeout('alertUser', () => {
      this._do(Actions.USER_ALERT, {
        type: null,
      });              
    });
  }



  loadScript (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.LOAD_SCRIPT_START, data);
      case 'result':
        this._do(Actions.LOAD_SCRIPT_RESULT, data);
        return ;
      case 'error':
        return this._do(Actions.LOAD_SCRIPT_ERROR, data);
    }
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



  fetchPricing (state, data) {
    clearTimeout('fetchPricing');

    switch (state) {
      case 'start':
        return this._do(Actions.FETCH_PRICING_START, data);
      case 'result':
        return this._do(Actions.FETCH_PRICING_RESULT, data);
      case 'error':
        this._do(Actions.FETCH_PRICING_ERROR, data);

        return this._setTimeout('fetchPricing', () => {
          this._do(Actions.FETCH_PRICING_RESET);          
        });
    }
  }



  chooseDiary (state, data) {
    this._clearTimeout('chooseDiary');

    switch (state) {
      case 'start':
        return this._do(Actions.CHOOSE_DIARY_START, data);
      case 'result':
        return this._do(Actions.CHOOSE_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.CHOOSE_DIARY_ERROR, data);

        return this._setTimeout('chooseDiary', () => {
          this._do(Actions.CHOOSE_DIARY_RESET);          
        });
    }
  }



  createDiary (state, data) {
    this._clearTimeout('createDiary');

    switch (state) {
      case 'start':
        return this._do(Actions.CREATE_DIARY_START, data);
      case 'result':
        return this._do(Actions.CREATE_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.CREATE_DIARY_ERROR, data);

        return this._setTimeout('createDiary', () => {
          this._do(Actions.CREATE_DIARY_RESET);          
        });
    }
  }


  enableCloudSync (state, data) {
    this._clearTimeout('enableCloudSync');

    switch (state) {
      case 'start':
        return this._do(Actions.ENABLE_CLOUD_SYNC_START, data);
      case 'progress':
        return this._do(Actions.ENABLE_CLOUD_SYNC_PROGRESS, data);
      case 'result':
        return this._do(Actions.ENABLE_CLOUD_SYNC_RESULT, data);
      case 'error':
        this._do(Actions.ENABLE_CLOUD_SYNC_ERROR, data);

        return this._setTimeout('enableCloudSync', () => {
          this._do(Actions.ENABLE_CLOUD_SYNC_RESET);          
        });
    }
  }



  login (state, data) {
    this._clearTimeout('login');

    switch (state) {
      case 'start':
        return this._do(Actions.LOGIN_START, data);
      case 'result':
        return this._do(Actions.LOGIN_RESULT, data);
      case 'error':
        this._do(Actions.LOGIN_ERROR, data);

        return this._setTimeout('login', () => {
          this._do(Actions.LOGIN_RESET);          
        });
    }
  }



  logout (state, data) {
    switch (state) {
      case 'start':
        return this._do(Actions.LOGOUT_START, data);
      case 'result':
        return this._do(Actions.LOGOUT_RESULT, data);
      case 'error':
        this._do(Actions.LOGOUT_ERROR, data);
    }
  }



  signUp (state, data) {
    this._clearTimeout('signUp');

    switch (state) {
      case 'start':
        return this._do(Actions.SIGN_UP_START, data);
      case 'result':
        return this._do(Actions.SIGN_UP_RESULT, data);
      case 'error':
        this._do(Actions.SIGN_UP_ERROR, data);

        return this._setTimeout('signUp', () => {
          this._do(Actions.SIGN_UP_RESET);          
        });
    }
  }


  authWithServer (state, data) {
    this._clearTimeout('authWithServer');

    switch (state) {
      case 'start':
        return this._do(Actions.AUTH_WITH_SERVER_START, data);
      case 'result':
        return this._do(Actions.AUTH_WITH_SERVER_RESULT, data);
      case 'error':
        this._do(Actions.AUTH_WITH_SERVER_ERROR, data);

        return this._setTimeout('authWithServer', () => {
          this._do(Actions.AUTH_WITH_SERVER_RESET);          
        });
    }
  }


  accountDataUpdated(data) {
    return this._do(Actions.ACCOUNT_DATA_UPDATED, data); 
  }


  openDiary (state, data) {
    this._clearTimeout('openDiary');

    switch (state) {
      case 'start':
        return this._do(Actions.OPEN_DIARY_START, data);
      case 'result':
        return this._do(Actions.OPEN_DIARY_RESULT, data);
      case 'error':
        this._do(Actions.OPEN_DIARY_ERROR, data);

        return this._setTimeout('openDiary', () => {
          this._do(Actions.OPEN_DIARY_RESET);          
        });
    }
  }



  updateEntry (state, data) {
    this._clearTimeout('updateEntry');

    switch (state) {
      case 'start':
        return this._do(Actions.UPDATE_ENTRY_START, data);
      case 'result':
        return this._do(Actions.UPDATE_ENTRY_RESULT, data);
      case 'error':
        this._do(Actions.UPDATE_ENTRY_ERROR, data);

        return this._setTimeout('updateEntry', () => {
          this._do(Actions.UPDATE_ENTRY_RESET);          
        });
    }
  }



  deleteEntry (state, data) {
    this._clearTimeout('deleteEntry');

    switch (state) {
      case 'start':
        return this._do(Actions.DELETE_ENTRY_START, data);
      case 'result':
        return this._do(Actions.DELETE_ENTRY_RESULT, data);
      case 'error':
        this._do(Actions.DELETE_ENTRY_ERROR, data);

        return this._setTimeout('deleteEntry', () => {
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
    this._clearTimeout('decryptEntries');

    switch (state) {
      case 'start':
        return this._do(Actions.DECRYPT_ENTRIES_START, data);
      case 'progress':
        return this._do(Actions.DECRYPT_ENTRIES_PROGRESS, data);
      case 'result':
        return this._do(Actions.DECRYPT_ENTRIES_RESULT, data);
      case 'error':
        return this._do(Actions.DECRYPT_ENTRIES_ERROR, data);

        return this._setTimeout('decryptEntries', () => {
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
      case 'progress':
        return this._do(Actions.DERIVE_KEYS_PROGRESS, data);
      case 'result':
        return this._do(Actions.DERIVE_KEYS_RESULT, data);
      case 'error':
        this._do(Actions.DERIVE_KEYS_ERROR, data);
    }
  }


  changePassword (state, data) {
    this._clearTimeout('changePassword');

    switch (state) {
      case 'start':
        return this._do(Actions.CHANGE_PASSWORD_START, data);
      case 'result':
        return this._do(Actions.CHANGE_PASSWORD_RESULT, data);
      case 'error':
        this._do(Actions.CHANGE_PASSWORD_ERROR, data);

        return this._setTimeout('changePassword', () => {
          this._do(Actions.CHANGE_PASSWORD_RESET);          
        });
    }
  }



  exportToFile (state, data) {
    this._clearTimeout('exportToFile');

    switch (state) {
      case 'start':
        return this._do(Actions.EXPORT_DATA_START, data);
      case 'result':
        return this._do(Actions.EXPORT_DATA_RESULT, data);
      case 'error':
        this._do(Actions.EXPORT_DATA_ERROR, data);

        return this._setTimeout('exportToFile', () => {
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
        return this._startBg('sync', 'Synchronizing with server');
      case 'progress':
        return this._updateBg('sync', data);
      case 'error':
        return this._errorBg('sync', data);
      case 'stop':
        return this._stopBg('sync');
    }
  }



  backup (state, data) {
    this._clearTimeout('backup');

    switch (state) {
      case 'start':
        return this._do(Actions.BACKUP_START, data);
      case 'result':
        return this._do(Actions.BACKUP_RESULT, data);
      case 'error':
        this._do(Actions.BACKUP_ERROR, data);

        return this._setTimeout('backup', () => {
          this._do(Actions.BACKUP_RESET);          
        });
    }
  }



  restore (state, data) {
    this._clearTimeout('restore');

    switch (state) {
      case 'start':
        return this._do(Actions.RESTORE_START, data);
      case 'progress':
        return this._do(Actions.RESTORE_PROGRESS, data);
      case 'result':
        return this._do(Actions.RESTORE_RESULT, data);
      case 'error':
        this._do(Actions.RESTORE_ERROR, data);

        return this._setTimeout('restore', () => {
          this._do(Actions.RESTORE_RESET);          
        });
    }
  }



  restoreFromOldDiary (state, data) {
    this._clearTimeout('restoreFromOldDiary');

    switch (state) {
      case 'start':
        return this._do(Actions.RESTORE_FROM_OLD_START, data);
      case 'progress':
        return this._do(Actions.RESTORE_FROM_OLD_PROGRESS, data);
      case 'result':
        return this._do(Actions.RESTORE_FROM_OLD_RESULT, data);
      case 'error':
        this._do(Actions.RESTORE_FROM_OLD_ERROR, data);

        return this._setTimeout('restoreFromOldDiary', () => {
          this._do(Actions.RESTORE_FROM_OLD_RESET);          
        });
    }
  }


  pay (state, data) {
    this._clearTimeout('pay');

    switch (state) {
      case 'start':
        return this._do(Actions.PAY_START, data);
      case 'progress':
        return this._do(Actions.PAY_PROGRESS, data);
      case 'result':
        return this._do(Actions.PAY_RESULT, data);
      case 'error':
        return this._do(Actions.PAY_ERROR, data);

        return this._setTimeout('pay', () => {
          this._do(Actions.PAY_RESET);          
        });
    }
  }



  sendFeedback (state, data) {
    this._clearTimeout('sendFeedback');

    switch (state) {
      case 'start':
        return this._do(Actions.FEEDBACK_START, data);
      case 'result':
        return this._do(Actions.FEEDBACK_RESULT, data);
      case 'error':
        this._do(Actions.FEEDBACK_ERROR, data);

        return this._setTimeout('sendFeedback', () => {
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
      msg: 'In progress...',
    });
  }


  _updateBg(taskId, msg) {
    this._do(Actions.BACKGROUND_TASK_PROGRESS, {
      id: taskId,
      msg: msg,
    });
  }


  _errorBg(taskId, msg) {
    this._do(Actions.BACKGROUND_TASK_ERROR, {
      id: taskId,
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


