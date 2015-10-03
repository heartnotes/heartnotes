import semver from 'semver';
import _ from 'lodash';

import Actions from './actions';
import InitialState from './initialState';
import AsyncState from './asyncState';
import { instance as Storage } from './storage/index';


exports.app = function(state = InitialState.app(), action) {
  switch (action.type) {
    case Actions.CHECK_FOR_UPDATES_STARTED:
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.started(state.checkingForUpdate),
        newVersionAvailable: false,
      });

    case Actions.CHECK_FOR_UPDATES_ERROR:
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.failed(state.checkingForUpdate, action.payload),
      });

    case Actions.CHECK_FOR_UPDATES_RESULT:
      let release = action.payload;
      
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.finished(state.checkingForUpdate, release),
        newVersionAvailable: semver.gt(release.tag_name, state.appVersion),
      });

    default:
      return state;
  }
};



exports.diary = function(state = InitialState.diary(), action) {
  switch (action.type) {
    case Actions.INIT:
      return _.extend({}, state, {
        lastAccessedDiaryDetails: Storage.getLastAccessedDiaryDetails()
      });

    default:
      return state;
  }
};
