import semver from 'semver';
import _ from 'lodash';

import Actions from './actions';
import InitialState from './initialState';


exports.app = function(state = InitialState.app(), action) {
  switch (action.type) {
    case Actions.CHECK_FOR_UPDATES_STARTED:
      return Object.assign({}, state, {
        checkingForUpdates: true,
        checkingForUpdatesError: null,
      });

    case Actions.CHECK_FOR_UPDATES_ERROR:
      return Object.assign({}, state, {
        checkingForUpdates: false,
        checkingForUpdatesError: action.payload,
      });

    case Actions.CHECK_FOR_UPDATES_RESULT:
      let release = action.payload;

      return Object.assign({}, state, {
        checkingForUpdates: false,
        checkingForUpdatesError: null,
        newVersionAvailable: semver.gt(release.tag_name, state.appVersion),
      });

    default:
      return state;
  }
};

