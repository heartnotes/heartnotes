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

var Logger = require('../utils/logger').create('ac');


// ------------------------------------------------------
// Builders
// ------------------------------------------------------

function buildAction(type, payload = {}) {
  if (payload && payload instanceof Error) {
    payload = {
      error: payload
    };
  }

  return {
    type: type,
    payload: payload,
  };
};



// ------------------------------------------------------
// Re-usable methods
// ------------------------------------------------------



function deriveKeyFromNewPassword (dispatch, password) {
  dispatch(buildAction(Actions.DERIVE_KEYS_START, {
    password: password
  }));

  return Crypto.deriveNewKey(password) 
    .then((derivedKeyData) => {
      // encrypt key with itself to produce key checking value
      return Crypto.encrypt(derivedKeyData.key1, derivedKeyData.key1)
        .then((keyTest) => {
          dispatch(buildAction(Actions.DERIVE_KEYS_RESULT, derivedKeyData));

          return _.extend({}, derivedKeyData, {
            meta: {
              keyTest: keyTest,
              salt: derivedKeyData.salt,
              iterations: derivedKeyData.iterations,
            }
          });
        });
    })
    .catch((err) => {
      dispatch(buildAction(Actions.DERIVE_KEYS_ERROR, err));

      throw err;
    });
}



function showAlert(dispatch, msg, type = 'info') {
  dispatch(buildAction(Actions.USER_ALERT, {
    msg: msg,
    type: type,
  }));

  return Q.delay(2000).then(() => {
    dispatch(buildAction(Actions.USER_ALERT, {
      msg: null,
      type: null,
    }));      
  });
}



function doSaveDiary(dispatch, getState, encKey) {
  dispatch(buildAction(Actions.SAVE_ENTRIES_START));

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
      dispatch(buildAction(Actions.SAVE_ENTRIES_RESULT));
    })
    .then(function shouldWeResave() {
      if (0 <= getState().diary.saveEntriesRequested) {
        return doSaveDiary(dispatch, getState);
      }
    })
    .catch(function(err) {
      Logger.error('diary save error', err);

      dispatch(buildAction(Actions.SAVE_ENTRIES_ERROR, err));

      return Q.delay(2000).then(() => {
        dispatch(buildAction(Actions.SAVE_ENTRIES_RESET));
      });
    });
}




function saveDiary(dispatch, getState) {
  dispatch(buildAction(Actions.SAVE_ENTRIES_REQUESTED));

  if (!getState().diary.savingEntries.inProgress) {
    return doSaveDiary(dispatch, getState);
  }
}



function rebuildSearchIndex(dispatch, entries) {
  dispatch(buildAction(Actions.BUILD_SEARCH_INDEX_START));

  return Search.reset()
    .then(function() {
      return Search.addMany(entries);
    })
    .then(function() {
      dispatch(buildAction(Actions.BUILD_SEARCH_INDEX_RESULT));
    })
    .catch(function(err) {
      dispatch(buildAction(Actions.BUILD_SEARCH_INDEX_ERROR, err));
    });
}



// ------------------------------------------------------
// Action creators
// ------------------------------------------------------



export function init() {
  return function(dispatch) {
    dispatch(buildAction(Actions.INIT));

    dispatch(buildAction(Actions.CHECK_FOR_UPDATES_START));

    return Q.cast($.ajax({
      cache: false,
      timeout: 3000,
      url: "https://api.github.com/repos/heartnotes/heartnotes/releases/latest"
    }))
      .then((release) => {
        dispatch(buildAction(Actions.CHECK_FOR_UPDATES_RESULT, release));
      })
      .catch((err) => {
        Logger.error(err);
        dispatch(buildAction(Actions.CHECK_FOR_UPDATES_ERROR, err));
      });      
  };
};



export function chooseDiary() {
  return function(dispatch) {
    dispatch(buildAction(Actions.CHOOSE_DIARY_START));
    
    return Storage.selectDiary()
      .then( (diaryName) => {
        if (!diaryName) {
          return;
        }

        return Storage.loadMetaDataFromDiary(diaryName);
      })
      .then( (data) => {
        dispatch(buildAction(Actions.CHOOSE_DIARY_RESULT, data));
      })
      .catch( (err) => {
        Logger.error(err);
        dispatch(buildAction(Actions.CHOOSE_DIARY_ERROR, err));

        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.CHOOSE_DIARY_RESET));
        })
      });
  }
};



export function closeDiary() {
  return function(dispatch) {
    dispatch(buildAction(Actions.CLOSE_DIARY));
  }
}



export function openDiary(name, password) {
  return function(dispatch) {
    dispatch(buildAction(Actions.OPEN_DIARY_START, {
      name: name,
      password: password,
    }));

    return Storage.loadMetaDataFromDiary(name)
      .then((metaData) => {
        if (!metaData) {
          throw new Error('Data file not found: ' + name);
        }

        dispatch(buildAction(Actions.DERIVE_KEYS_START, {
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
        dispatch(buildAction(Actions.OPEN_DIARY_RESULT, {
          name: name,
          password: password,
        }));
      })
      .catch((err) => {
        Logger.error(err);
        dispatch(buildAction(Actions.OPEN_DIARY_ERROR, err));

        // Q.delay(2000).then(() => {
        //   dispatch(buildAction(Actions.OPEN_DIARY_RESET));
        // });
      })
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
      .then(function entryReady(entry) {
        entry.body = content;

        dispatch(buildAction(Actions.UPDATE_ENTRY_RESULT, entry));

        return saveDiary(dispatch, getState)
          .then(function() {
            return entry;
          });
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







