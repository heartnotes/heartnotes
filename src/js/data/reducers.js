import semver from 'semver';
import _ from 'lodash';

import Actions from './actions';
import InitialState from './initialState';
import * as AsyncState from './asyncState';
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
        newVersionAvailable: semver.gt(release.tag_name, state.version),
      });

    default:
      return state;
  }
};




exports.alert = function(state = InitialState.alert(), action) {
  switch (action.type) {
    case Actions.USER_ALERT:
      return _.extend({}, state, action.payload);

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
        name: null,
        derivedKeys: null,
        entries: null,
      });

    case Actions.OPEN_DIARY_RESULT:
      return _.extend({}, state, {
        name: action.payload.name,
        opening: AsyncState.result(state.opening, action.payload),
      });

    case Actions.OPEN_DIARY_ERROR:
      return _.extend({}, state, {
        opening: AsyncState.error(state.opening, action.payload),
      });

    case Actions.OPEN_DIARY_RESET:
      return _.extend({}, state, {
        opening: AsyncState.reset(state.opening),
      });

    case Actions.CREATE_DIARY_START:
      return _.extend({}, state, {
        creating: AsyncState.start(state.creating),
        derivingKeys: AsyncState.reset(state.derivingKeys),
        name: null,
        derivedKeys: null,
        entries: null,
      });

    case Actions.CREATE_DIARY_RESULT:
      return _.extend({}, state, {
        name: action.payload.name,
        creating: AsyncState.result(state.creating, action.payload),
      });

    case Actions.CREATE_DIARY_ERROR:
      return _.extend({}, state, {
        creating: AsyncState.error(state.creating, action.payload),
      });

    case Actions.CREATE_DIARY_RESET:
      return _.extend({}, state, {
        creating: AsyncState.reset(state.creating),
      });

    case Actions.LOAD_ENTRIES_START:
      return _.extend({}, state, {
        loadingEntries: AsyncState.start(state.loadingEntries),
      });

    case Actions.LOAD_ENTRIES_RESULT:
      return _.extend({}, state, {
        loadingEntries: AsyncState.result(state.loadingEntries, action.payload),
        entries: action.payload.entries || {},
      });

    case Actions.LOAD_ENTRIES_ERROR:
      return _.extend({}, state, {
        loadingEntries: AsyncState.error(state.loadingEntries, action.payload),
      });

    case Actions.LOAD_ENTRIES_RESET:
      return _.extend({}, state, {
        loadingEntries: AsyncState.reset(state.loadingEntries),
      });

    case Actions.DERIVE_KEYS_START:
      return _.extend({}, state, {
        derivingKeys: AsyncState.start(state.derivingKeys),
        derivedKeys: null,
      });

    case Actions.DERIVE_KEYS_RESULT:
      return _.extend({}, state, {
        derivingKeys: AsyncState.result(state.derivingKeys, action.payload),
        derivedKeys: action.payload,
      });

    case Actions.DERIVE_KEYS_ERROR:
      return _.extend({}, state, {
        derivingKeys: AsyncState.error(state.derivingKeys, action.payload),
      });

    default:
      return state;
  }
};






