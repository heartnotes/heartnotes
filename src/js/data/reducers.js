import semver from 'semver';
import _ from 'lodash';

import Actions from './actions';
import InitialState from './initialState';
import AsyncState from './asyncState';
import { instance as Storage } from './storage/index';


exports.app = function(state = InitialState.app(), action) {
  switch (action.type) {
    case Actions.CHECK_FOR_UPDATES_START:
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.start(state.checkingForUpdate),
        newVersionAvailable: false,
      });

    case Actions.CHECK_FOR_UPDATES_ERROR:
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.error(state.checkingForUpdate, action.payload),
      });

    case Actions.CHECK_FOR_UPDATES_RESULT:
      let release = action.payload;

      return _.extend({}, state, {
        checkingForUpdate: AsyncState.result(state.checkingForUpdate, release),
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

    case Actions.CHOOSE_DIARY_START:
      return _.extend({}, state, {
        choosing: AsyncState.start(state.choosing),
      });

    case Actions.CHOOSE_DIARY_RESULT:
      return _.extend({}, state, {
        choosing: AsyncState.result(state.choosing, action.payload),
        lastAccessedDiaryDetails: Storage.getLastAccessedDiaryDetails(),
      });

    case Actions.CHOOSE_DIARY_ERROR:
      return _.extend({}, state, {
        choosing: AsyncState.error(state.choosing, action.payload),
      });

    case Actions.CHOOSE_DIARY_RESET:
      return _.extend({}, state, {
        choosing: AsyncState.reset(state.choosing),
      });

    case Actions.OPEN_DIARY_START:
      return _.extend({}, state, {
        opening: AsyncState.start(state.opening),
        derivingKeys: AsyncState.reset(state.derivingKeys),
      });

    case Actions.DERIVE_KEYS_START:
      return _.extend({}, state, {
        lastAccessedDiaryDetails: Storage.getLastAccessedDiaryDetails(),
        derivingKeys: AsyncState.start(state.derivingKeys),
      });

    default:
      return state;
  }
};






