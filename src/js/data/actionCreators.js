import _ from 'lodash';
import Q from 'bluebird';
import $ from 'jquery';
import moment from 'moment';
import React from 'react';

import Actions from './actions';
import { instance as Storage } from './storage/index';
import { instance as Search } from './search/index';
import { instance as Crypto } from './crypto/index';
import { instance as Dispatcher } from './dispatcher';
import { instance as Auth } from './auth/index';
import Diary from './diary/index';


var Logger = require('../utils/logger').create('ac');



// ------------------------------------------------------
// Action creators
// ------------------------------------------------------



export function init() {
  return function(dispatch, getState) {
    Dispatcher.setup(dispatch, getState);

    Dispatcher.initApp();

    Dispatcher.checkForUpdates('start');

    return Q.cast($.ajax({
      cache: false,
      timeout: 3000,
      url: "https://api.github.com/repos/heartnotes/heartnotes/releases/latest"
    }))
      .then((release) => {
        Dispatcher.checkForUpdates('result', release);
      })
      .catch((err) => {
        Logger.error(err);
        
        Dispatcher.checkForUpdates('error', err);
      });      
  };
};



export function chooseDiary() {
  return function(dispatch) {
    Dispatcher.chooseDiary('start');
    
    return Storage.selectDiary()
      .then( (diaryName) => {
        if (!diaryName) {
          return;
        }

        return Storage.loadDiary(diaryName);
      })
      .then( (diary) => {
        Dispatcher.chooseDiary('result', diary);
      })
      .catch( (err) => {
        Logger.error(err);
        Dispatcher.chooseDiary('error', err);
      });
  }
};



export function closeDiary() {
  return function(dispatch) {
    Dispatcher.closeDiary();
  }
}



export function openDiary(name, password) {
  return function(dispatch) {
    return Storage.loadDiary(name)
      .then((diary) => {
        return diary.open(password);
      });
  }
}



export function createDiary(password) {
  return function(dispatch) {
    Dispatcher.createDiary('start');

    return Auth.createPassword(password)
      .then(() => {
        return Diary.createNew(Auth.meta)
          .then((diary) => {
            if (!diary) {
              throw new Error('Sorry, there was an unexpected error.');
            }

            Dispatcher.createDiary('result', diary);

            Dispatcher.alertUser('Diary created!');
          });
      })
      .catch((err) => {
        Logger.error(err);

        Dispatcher.createDiary('error', err);

        throw err;
      });
  };
}



export function loadEntries() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.loadEntries();
  };
}




export function updateEntry(id, ts, content) {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.updateEntry(id, ts, content);
  }
}



export function deleteEntry(id) {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.deleteEntry(id);
  }
}




export function changePassword (oldPassword, newPassword) {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.changePassword(oldPassword, newPassword)
      .then(() => {
        Dispatcher.alertUser('Password changed!');
      });
  }
}



export function exportData() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.exportToFile()
      .then(() => {
        Dispatcher.alertUser('Diary exported!');
      });
  }
}



var searchTimeout = null;

export function search(keyword) {
  return function(dispatch) {
    // use a timeout so that we wait for user to finish typing before searching
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    searchTimeout = setTimeout(function() {
      dispatch(buildAction(Actions.SEARCH_START, {
        keyword: keyword
      }));

      // if empty then return immediately
      if (!_.get(keyword, 'length')) {
        return dispatch(buildAction(Actions.SEARCH_RESULT, []));
      }

      Search.search(keyword)
        .then(function(results) {
          dispatch(buildAction(Actions.SEARCH_RESULT, results));
        })
        .catch(function(err) {
          dispatch(buildAction(Actions.SEARCH_ERROR, err));
        });
    }, 250);
  };
}








