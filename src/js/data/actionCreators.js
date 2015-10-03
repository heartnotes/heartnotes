import _ from 'lodash';
import Q from 'bluebird';

import Actions from './actions';
import Storage from './storage/index';
import Crypto from './crypto/index';



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
    return Q.all([
      dispatch(buildAction(Actions.INIT)),
      dispatch(exports.checkForUpdates()),
    ]);
  };
};



export function checkForUpdates() {
  return function(dispatch) {
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
          dispatch(buildAction(Actions.OPEN_DIARY_RESET, err));
        });
      })
  }
}




