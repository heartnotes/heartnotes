import _ from 'lodash';
import Actions from './actions';

var logger = window.rootLogger.create('redux');


// ------------------------------------------------------
// Builders
// ------------------------------------------------------

function buildAction(type, payload = {}) {
  return {
    type: type,
    payload: payload,
  };
};


function buildErrorAction(type, err) {
  return buildAction(type, {
    error: err
  });
};


// ------------------------------------------------------
// Action creators
// ------------------------------------------------------


export function checkForUpdates() {
  return function(dispatch) {
    dispatch(buildAction(Actions.CHECK_FOR_UPDATES_STARTED));

    logger.info('checking for updates');

    Q.cast($.ajax({
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



