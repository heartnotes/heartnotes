import _ from 'lodash';
import Q from 'bluebird';
import $ from 'jquery';

import Actions from './actions';
import { instance as Storage } from './storage/index';
import { instance as Crypto } from './crypto/index';



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
        dispatch(buildAction(Actions.CHOOSE_DIARY_ERROR, err));

        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.CHOOSE_DIARY_RESET));
        })
      });
  }
};




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
        dispatch(buildAction(Actions.OPEN_DIARY_ERROR, err));

        Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.OPEN_DIARY_RESET));
        });
      })
  }
}




function _deriveKeyFromNewPassword (dispatch, password) {
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



function _showAlert(dispatch, msg, type = 'info') {
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



export function createDiary(password) {
  return function(dispatch) {
    dispatch(buildAction(Actions.CREATE_DIARY_START, {
      password: password,
    }));


    return _deriveKeyFromNewPassword(dispatch, password)
      .then((derivedKeyData) => {
        return Storage.createNewDiary(_.pick(derivedKeyData, 'meta'))
          .then((name) => {
            if (!name) {
              throw new Error('Please choose a location to save the file in');
            }

            dispatch(buildAction(Actions.CREATE_DIARY_RESULT, {
              name: name,
            }));

            _showAlert(dispatch, 'Diary created!');
          });
      })
      .catch(function(err) {
        dispatch(buildAction(Actions.CREATE_DIARY_ERROR, err));

        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.CREATE_DIARY_RESET));      
        });
      });
  };
}



export function loadEntries() {
  return function(dispatch, getState) {
    let state = getState();

    dispatch(buildAction(Actions.LOAD_ENTRIES_START));

    return Q.try(function() {
      if (!state.diary.name) {
        throw new Error('No diary loaded');
      }      

      return Storage.loadEntriesFromDiary(state.diary.name);
    })
      .then( function gotEntries(encryptedEntries) {
        if (!encryptedEntries) {
          // self.logger.info('no existing entries found');
          return {};
        } else {
          // self.logger.info('decrypt entries', encryptedEntries.length);
          return self.crypto.decrypt(
            self.state.derivedKeys.key1, encryptedEntries
          );
            // .catch(function(err) {
            //   self.logger.error('entry decryption error', err);

            //   throw err;
            // });
        }
      })
      .then(function gotEntries(entries) {
        // self.logger.debug('decrypted entries', _.keys(entries).length);

        dispatch(buildAction(Actions.LOAD_ENTRIES_RESULT, {
          entries: entries
        }));
      })
      .catch(function(err) {
        dispatch(buildAction(Actions.LOAD_ENTRIES_ERROR, err));

        return Q.delay(2000).then(() => {
          dispatch(buildAction(Actions.LOAD_ENTRIES_RESET));      
        });
      });
  };
}



