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



export function chooseDiary(id) {
  return function(dispatch) {
    Dispatcher.chooseDiary('start');
    
    return Storage.local.loadDiary(id)
      .then( () => {
        Dispatcher.chooseDiary('result');
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



export function openDiary(id, password) {
  return function(dispatch) {
    return Diary.load(id)
      .then((diaryMr) => {
        return diaryMr.open(password);
      });
  }
}



export function createDiary(name, password) {
  return function(dispatch) {
    Dispatcher.createDiary('start', {
      name: name
    });

    return Diary.createNew(name, password)
      .then((diaryMgr) => {
        if (!diaryMgr) {
          throw new Error('Sorry, there was an unexpected error.');
        }

        Dispatcher.createDiary('result', diaryMgr);

        Dispatcher.alertUser('Diary created!');
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
  return function(dispatch, getState) {
    // use a timeout so that we don't keep making calls to the index
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (!_.get(keyword, 'length')) {
      keyword = null;
    }

    searchTimeout = setTimeout(function() {
      Dispatcher.search('start', {
        keyword: keyword,
      });

      // if empty then return immediately
      if (!keyword) {
        return Dispatcher.search('result', []);
      }

      Search.search(keyword)
        .then(function(results) {
          Dispatcher.search('result', results);
        })
        .catch(function(err) {
          Logger.error(err);

          Dispatcher.search('error', err);

          throw err;
        });
    }, 250);
  };
}








