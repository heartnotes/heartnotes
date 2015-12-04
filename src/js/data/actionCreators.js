import _ from 'lodash';
import Q from 'bluebird';
import $ from 'jquery';
import moment from 'moment';
import React from 'react';

import ExportedEntries from '../ui/components/ExportedEntries';
import Actions from './actions';
import Methods from './methods';
import { instance as Storage } from './storage/index';
import { instance as Search } from './search/index';
import { instance as Crypto } from './crypto/index';
import { instance as Dispatcher } from './dispatcher';

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
    Dispatcher.init(dispatch, getState);

    Dispatcher.init();
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
    Dispatcher.openDiary('start', {
      name: name,
      password: password,
    });

    return Storage.loadMetaDataFromDiary(name)
      .then((metaData) => {
        if (!metaData) {
          throw new Error('Data file not found: ' + name);
        }

        Dispatcher.do(Actions.DERIVE_KEYS_START, {
          metaData: metaData, 
          password: password,
        }));

        return Crypto.deriveKey(password, {
          salt: metaData.salt,
          iterations: metaData.iterations,
        })
          .then((derivedKeyData) => {
            // now test that keys are correct
            return Crypto.decrypt(derivedKeyData.key1, metaData.keyTest)
              .then((plainData) => {
                if (plainData !== derivedKeyData.key1) {
                  throw new Error('Password incorrect');
                }

                dispatch(buildAction(Actions.DERIVE_KEYS_RESULT, derivedKeyData));
              })
              .catch((err) => {
                dispatch(buildAction(Actions.DERIVE_KEYS_ERROR, err));

                throw err;
              });
          });
      })
      .then(() => {
        return dispatch(buildAction(Actions.OPEN_DIARY_RESULT, {
          name: name,
          password: password,
        }));
      })
      .catch((err) => {
        Logger.error(err);

        dispatch(buildAction(Actions.OPEN_DIARY_ERROR, err))
        
        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.OPEN_DIARY_RESET));
        });
      });
  }
}








export function createDiary(password) {
  return function(dispatch) {
    dispatch(buildAction(Actions.CREATE_DIARY_START));


    return deriveKeyFromNewPassword(dispatch, password)
      .then((derivedKeyData) => {
        return Storage.createNewDiary(_.pick(derivedKeyData, 'meta'))
          .then((name) => {
            if (!name) {
              throw new Error('Please choose a location to save the file in');
            }

            dispatch(buildAction(Actions.CREATE_DIARY_RESULT, {
              name: name,
              password: password,
            }));

            showAlert(dispatch, 'Diary created!');
          });
      })
      .catch(function(err) {
        Logger.error(err);
        dispatch(buildAction(Actions.CREATE_DIARY_ERROR, err));

        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.CREATE_DIARY_RESET));      
        });
      });
  };
}



export function loadEntries() {
  return function(dispatch, getState) {
    let diary = getState().diary;

    dispatch(buildAction(Actions.LOAD_ENTRIES_START));

    return Q.try(function() {
      if (!diary.name) {
        throw new Error('No diary loaded');
      }      

      return Storage.loadEntriesFromDiary(diary.name);
    })
      .then( function gotEntries(encryptedEntries) {
        if (!encryptedEntries) {
          Logger.info('no existing entries found');

          return {};
        } else {
          Logger.info('decrypt entries', encryptedEntries.length);

          return Crypto.decrypt(
            diary.derivedKeys.key1, encryptedEntries
          )
            .catch(function(err) {
              Logger.error('entry decryption error', err);

              throw err;
            });
        }
      })
      .then(function gotEntries(entries) {
        Logger.debug('decrypted entries', _.keys(entries).length);

        dispatch(buildAction(Actions.LOAD_ENTRIES_RESULT, {
          entries: entries
        }));

        return entries;
      })
      .then(function buildSearchIndex(entries) {
        Logger.debug('rebuild search index', _.keys(entries).length);

        return rebuildSearchIndex(dispatch, entries);
      })
      .catch(function(err) {
        Logger.error(err);
        dispatch(buildAction(Actions.LOAD_ENTRIES_ERROR, err));

        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.LOAD_ENTRIES_RESET));      
        });
      });
  };
}




export function updateEntry(id, ts, content) {
  return function(dispatch, getState) {
    dispatch(buildAction(Actions.UPDATE_ENTRY_START));

    let methods = new Methods(getState());

    return new Q(function(resolve, reject) {
      var entry = methods.getEntry(id) || methods.getEntryByDate(ts);

      if (!entry) {
        ts = moment(ts || Date.now()).startOf('day').valueOf();

        Logger.debug('create entry', ts);

        Crypto.hash(ts, Math.random() * 100000)
          .then(function hashedVal(newId) {
            resolve({
              id: newId,
              ts: ts,
            });
          })
          .catch(reject);
      } else {
        resolve(entry);
      }
    })
      .then(function saveToDiary(entry) {
        entry.body = content;
        
        return Storage.saveEntry(entry);
      })
      .then(function entrySaved(entry) {
        dispatch(buildAction(Actions.UPDATE_ENTRY_RESULT, entry));
      })
      .then(function updateSearchIndex(entry) {
        return Search.add({
          id: entry.id,
          ts: entry.ts,
          body: entry.body,
        });
      })
      .catch(function(err) {
        Logger.error(err);
        dispatch(buildAction(Actions.UPDATE_ENTRY_ERROR, err));

        return Q.delay(2000).then(function() {
          dispatch(buildAction(Actions.UPDATE_ENTRY_RESET));
        });
      })
  }
}



export function deleteEntry(id) {
  return function(dispatch, getState) {
    let methods = new Methods(getState());

    return Q.resolve()
      .then(function getEntry() {
        var entry = methods.getEntry(id);

        if (!entry) {
          throw new Error('Entry not found: ' + id);
        }

        return entry;
      })
      .then(function deleteEntry(entry) {
        dispatch(buildAction(Actions.DELETE_ENTRY, {
          entry: entry,
        }));

        return saveDiary(dispatch, getState);
      })
      .then(function updateSearchIndex() {
        return Search.remove({
          id: id
        });
      })
      .catch(function(err) {
        Logger.error(err);
      });
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








