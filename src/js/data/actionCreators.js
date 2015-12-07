import _ from 'lodash';
import Q from 'bluebird';
import $ from 'jquery';
import moment from 'moment';
import React from 'react';

import ExportedEntries from '../ui/components/ExportedEntries';
import Actions from './actions';
import { instance as Storage } from './storage/index';
import { instance as Search } from './search/index';
import { instance as Crypto } from './crypto/index';
import { instance as Dispatcher } from './dispatcher';
import { instance as Auth } from './auth/index';
import Diary from './diary/index';


var Logger = require('../utils/logger').create('ac');


// ------------------------------------------------------
// Re-usable methods
// ------------------------------------------------------


function doSaveDiary(dispatch, getState, encKey) {
  Dispatcher.saveEntries('start');

  let diary = getState().diary;
  let { entries, name, derivedKeys } = diary;
  encKey = encKey || derivedKeys.key1;

  return Q.resolve()
    .then(function encryptEntries() {
      if (!name) {
        throw new Error('No diary to save to');
      }

      return Crypto.encrypt(encKey, entries);
    })
    .catch(function unableToEncrypt(err) {
      Logger.error('entry encryption error', err);
      throw err;
    })
    .then(function saveToDiary(saveData) {
      Logger.debug('encypted entries', saveData.length + ' bytes');

      return Storage.saveEntriesToDiary(name, saveData);
    })
    .then(function persist() {
      return Storage.persist(name);
    })
    .then(function allDone() {
      Dispatcher.saveEntries('result');
    })
    .then(function shouldWeResave() {
      if (0 <= getState().diary.saveEntriesRequested) {
        return doSaveDiary(dispatch, getState);
      }
    })
    .catch(function(err) {
      Logger.error('diary save error', err);

      Dispatcher.saveEntries('error', err);
    });
}




function saveDiary(dispatch, getState) {
  Dispatcher.saveEntries('requested');

  if (!getState().diary.savingEntries.inProgress) {
    return doSaveDiary(dispatch, getState);
  }
}




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
        return Diary.createNew(meta)
          .then((diary) => {
            if (!diary) {
              throw new Error('Sorry, there was unexpected error.');
            }

            Dispatcher.createDiary('result', diary);

            Dispatcher.alertUser('Diary created!');
          });
      })
      .catch((err) => {
        Dispatcher.createDiary('error', err);
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
    dispatch(buildAction(Actions.CHANGE_PASSWORD_START));

    let diary = getState().diary;

    return Q.resolve()
      .then(function checkOldPassword() {
        if (diary.password !== oldPassword) {
          throw new Error('Your current password is wrong');
        }
      })
      .then(function updateMetaData() {
        return deriveKeyFromNewPassword(dispatch, newPassword)
          .then(function saveMetadata(derivedKeyData) {
            return Storage.saveMetaDataToDiary(
              diary.name, derivedKeyData.meta
            )
              .then(function saveEntries() {
                return doSaveDiary(dispatch, getState, derivedKeyData.key1);
              })
              .then(function allDataUpdated() {
                dispatch(buildAction(Actions.CHANGE_PASSWORD_RESULT, {
                  password: newPassword,
                  derivedKeys: derivedKeyData,
                }));

                return showAlert(dispatch, 'Password updated!');
              });
          });
      })      
      .catch(function(err){
        Logger.error(err);
        dispatch(buildAction(Actions.CHANGE_PASSWORD_ERROR, err));

        return Q.delay(2000).then(function() {
          dispatch(buildAction(Actions.CHANGE_PASSWORD_RESET));
        });
      });
  }
}



export function exportData() {
  return function(dispatch, getState) {
    dispatch(buildAction(Actions.EXPORT_DATA_START));

    let { entries } = getState().diary;

    let content = React.renderToString(
      <ExportedEntries entries={entries} />
    );

    return Storage.exportToFile(content)
      .then(function didUserCancel(filePath) {
        // user cancelled?
        if (!filePath) {
          return dispatch(buildAction(Actions.EXPORT_DATA_RESET));
        }

        dispatch(buildAction(Actions.EXPORT_DATA_RESULT, {
          filePath: filePath,
        }));

        return showAlert(dispatch, 'Data exported!');
      })
      .catch(function(err) {
        Logger.error(err);
        dispatch(buildAction(Actions.EXPORT_DATA_ERROR, err));

        return Q.delay(2000).then(function() {
          dispatch(buildAction(Actions.EXPORT_DATA_RESET));
        });
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








