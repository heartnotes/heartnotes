import _ from 'lodash';
import Q from 'bluebird';
import $ from 'jquery';
import moment from 'moment';
import React from 'react';
import { Timer } from 'clockmaker';

import Actions from './actions';
import { instance as Storage } from './storage/index';
import { instance as Search } from './search/index';
import { instance as Crypto } from './crypto/index';
import { instance as Dispatcher } from './dispatcher';
import { instance as Api } from './api';
import * as ScreenUtils from '../utils/screen';
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

    (window.onresize = function() {
      Dispatcher.screenChanged(ScreenUtils.getScreenDetails());
    })();

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



export function closeDiary() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    diaryMgr.destroy()
      .then(() => {
        Dispatcher.closeDiary();
      });
  }
}



export function openDiary(username, password) {
  return function(dispatch) {
    Dispatcher.openDiary('start');

    return Diary.open(username, password)
      .then((diaryMgr) =>  {
        Dispatcher.openDiary('result', diaryMgr);
      })
      .catch((err) => {
        Logger.error(err);

        Dispatcher.openDiary('error', err);

        throw err;
      });
  }
}




export function openDiary(type, username, password) {
  return function(dispatch) {
    Dispatcher.openDiary('start');

    return Diary.open(type, username, password)
      .then((diaryMgr) =>  {
        Dispatcher.openDiary('result', diaryMgr);
      })
      .catch((err) => {
        Logger.error(err);

        Dispatcher.openDiary('error', err);

        throw err;
      });
  }
}



export function createDiary(type, id, password) {
  return function(dispatch) {
    Dispatcher.createDiary('start', {
      id: id
    });

    return Diary.createNew(type, id, password)
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


export function createEntryForNow() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.getOrCreateEntryForDate(Date.now());
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



export function makeBackup() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.makeBackup();
  }
}



export function restoreBackup() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.restoreBackup();
  }
}



export function selectOldDiaryFile() {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.selectOldDiaryFile();
  }
}



export function restoreFromOldDiaryFile(filePath, password) {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.restoreFromOldDiaryFile(filePath, password);
  }
}




export function sendFeedback(msg) {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    Dispatcher.sendFeedback('start');

    return Api.post('feedback', {}, {
      id: diaryMgr.id,
      msg: msg,
    })
      .then(() => {
        Dispatcher.alertUser('Feedback sent!');

        Dispatcher.sendFeedback('result');
      })
      .catch((err) => {
        Logger.error(err);

        Dispatcher.sendFeedback('error', err);

        throw err;
      });
  }
}




export function getPricing() {
  return function(dispatch, getState) {
    Dispatcher.fetchPricing('start');

    return Api.get('pricing')
      .then((data) => {
        let pricingOptions = data.options;

        Dispatcher.fetchPricing('result', pricingOptions);

        return pricingOptions;
      })
      .catch((err) => {
        Logger.error(err);

        Dispatcher.fetchPricing('error', err);

        throw err;
      });
  }
}



export function pay(pricing, cardDetails) {
  return function(dispatch, getState) {
    let diaryMgr = getState().diary.diaryMgr;

    return diaryMgr.auth.buySubscription(pricing, cardDetails);
  }
}




export function loadScript(id, url, check) {
  return function(dispatch, getState) {
    Dispatcher.loadScript('start', {
      id: id,
      url: url,
    });

    let script = document.createElement('script');
    script.async = false;
    script.src = url;
    document.head.appendChild(script);

    let _doTimer;

    (_doTimer = () => {
      setTimeout(() => {
        // stop once loaded
        if (window[check.global]) {
          Dispatcher.loadScript('result', {
            id: id,
            object: window[check.global],
          });
        }
        // stop after 30 seconds
        else if (15 < timer.getNumTicks()) {
          Dispatcher.loadScript('error', {
            id: id,
            error: new Error('Timed out'),
          });
        }
        else {
          _doTimer();
        }
      }, 2000);
    })();
  }
}



