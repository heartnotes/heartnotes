import semver from 'semver';
import _ from 'lodash';

import { Actions } from './actions';
import InitialState from './initialState';
import * as AsyncState from './asyncState';
import { instance as Storage } from './storage/index';


var LocalStorage = Storage.local;


exports.app = function(state = InitialState.app(), action) {
  switch (action.type) {
    case Actions.CHECK_FOR_UPDATES_START:
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.start(),
        newVersionAvailable: false,
      });

    case Actions.CHECK_FOR_UPDATES_ERROR:
      return _.extend({}, state, {
        checkingForUpdate: AsyncState.error(action.payload),
      });

    case Actions.CHECK_FOR_UPDATES_RESULT:
      let release = action.payload;

      return _.extend({}, state, {
        checkingForUpdate: AsyncState.result(release),
        newVersionAvailable: semver.gt(release.tag_name, state.version),
      });

    case Actions.FEEDBACK_START:
      return _.extend({}, state, {
        sendingFeedback: AsyncState.start(),
      });

    case Actions.FEEDBACK_RESULT:
      return _.extend({}, state, {
        sendingFeedback: AsyncState.result(action.payload),
      });
      
    case Actions.FEEDBACK_ERROR:
      return _.extend({}, state, {
        sendingFeedback: AsyncState.error(action.payload),
      });

    case Actions.FEEDBACK_RESET:
      return _.extend({}, state, {
        sendingFeedback: AsyncState.reset(action.payload),
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
        lastAccessedDiary: LocalStorage.getLastAccessed(),
      });

    case Actions.BACKUP_START:
      return _.extend({}, state, {
        makingBackup: AsyncState.start(),
      });

    case Actions.BACKUP_RESULT:
      return _.extend({}, state, {
        makingBackup: AsyncState.result(action.payload),
      });

    case Actions.BACKUP_ERROR:
      return _.extend({}, state, {
        makingBackup: AsyncState.error(action.payload),
      });

    case Actions.BACKUP_RESET:
      return _.extend({}, state, {
        makingBackup: AsyncState.reset(),
      });


    case Actions.RESTORE_START:
      return _.extend({}, state, {
        restoringBackup: AsyncState.start(),
      });

    case Actions.RESTORE_PROGRESS:
      return _.extend({}, state, {
        restoringBackup: AsyncState.progress(action.payload),
      });

    case Actions.RESTORE_RESULT:
      return _.extend({}, state, {
        restoringBackup: AsyncState.result(action.payload),
      });

    case Actions.RESTORE_ERROR:
      return _.extend({}, state, {
        restoringBackup: AsyncState.error(action.payload),
      });

    case Actions.RESTORE_RESET:
      return _.extend({}, state, {
        restoringBackup: AsyncState.reset(),
      });



    case Actions.CLOSE_DIARY:
      return _.extend({}, state, {
        diaryMgr: null,
        loadingEntries: AsyncState.reset(),
      });


    case Actions.CHOOSE_DIARY_START:
      return _.extend({}, state, {
        choosing: AsyncState.start(),
      });

    case Actions.CHOOSE_DIARY_RESULT:
      return _.extend({}, state, {
        choosing: AsyncState.result(action.payload),
        lastAccessedDiary: LocalStorage.getLastAccessed(),
      });

    case Actions.CHOOSE_DIARY_ERROR:
      return _.extend({}, state, {
        choosing: AsyncState.error(action.payload),
      });

    case Actions.CHOOSE_DIARY_RESET:
      return _.extend({}, state, {
        choosing: AsyncState.reset(),
      });

    case Actions.LOGIN_START:
      return _.extend({}, state, {
        loggingIn: AsyncState.start(),
      });

    case Actions.LOGIN_RESULT:
      return _.extend({}, state, {
        loggingIn: AsyncState.result(action.payload),
      });

    case Actions.LOGIN_ERROR:
      return _.extend({}, state, {
        loggingIn: AsyncState.error(action.payload),
      });

    case Actions.LOGIN_RESET:
      return _.extend({}, state, {
        loggingIn: AsyncState.reset(),
      });

    case Actions.SIGN_UP_START:
      return _.extend({}, state, {
        signingUp: AsyncState.start(),
      });

    case Actions.SIGN_UP_RESULT:
      return _.extend({}, state, {
        signingUp: AsyncState.result(action.payload),
      });

    case Actions.SIGN_UP_ERROR:
      return _.extend({}, state, {
        signingUp: AsyncState.error(action.payload),
      });

    case Actions.SIGN_UP_RESET:
      return _.extend({}, state, {
        signingUp: AsyncState.reset(),
      });

    case Actions.OPEN_DIARY_START:
      return _.extend({}, state, {
        opening: AsyncState.start(),
        derivingKeys: AsyncState.reset(),
        diaryMgr: null,
      });

    case Actions.OPEN_DIARY_RESULT:
      return _.extend({}, state, {
        lastAccessedDiary: LocalStorage.getLastAccessed(),
        diaryMgr: action.payload,
        opening: AsyncState.result(action.payload),
        loadingEntries: AsyncState.reset(),
      });

    case Actions.OPEN_DIARY_ERROR:
      return _.extend({}, state, {
        opening: AsyncState.error(action.payload),
      });

    case Actions.OPEN_DIARY_RESET:
      return _.extend({}, state, {
        opening: AsyncState.reset(),
      });

    case Actions.CREATE_DIARY_START:
      return _.extend({}, state, {
        creating: AsyncState.start(),
        derivingKeys: AsyncState.reset(),
        diaryMgr: null,
      });

    case Actions.CREATE_DIARY_RESULT:
      return _.extend({}, state, {
        lastAccessedDiary: LocalStorage.getLastAccessed(),
        diaryMgr: action.payload,
        creating: AsyncState.result(action.payload),
      });

    case Actions.CREATE_DIARY_ERROR:
      return _.extend({}, state, {
        creating: AsyncState.error(action.payload),
      });

    case Actions.CREATE_DIARY_RESET:
      return _.extend({}, state, {
        creating: AsyncState.reset(),
      });

    case Actions.LOAD_ENTRIES_START:
      return _.extend({}, state, {
        loadingEntries: AsyncState.start(),
        searchIndexing: AsyncState.reset(),
      });

    case Actions.LOAD_ENTRIES_PROGRESS:
      return _.extend({}, state, {
        loadingEntries: AsyncState.progress(action.payload),
      });

    case Actions.LOAD_ENTRIES_RESULT:
      return _.extend({}, state, {
        loadingEntries: AsyncState.result(action.payload),
        searching: {
          inProgress: false,
          keyword: null,
          results: null,
        },
      });

    case Actions.LOAD_ENTRIES_ERROR:
      return _.extend({}, state, {
        loadingEntries: AsyncState.error(action.payload),
      });

    case Actions.LOAD_ENTRIES_RESET:
      return _.extend({}, state, {
        loadingEntries: AsyncState.reset(),
      });


    case Actions.DECRYPT_ENTRIES_START:
      return _.extend({}, state, {
        decryptEntries: AsyncState.start(),
      });

    case Actions.DECRYPT_ENTRIES_PROGRESS:
      return _.extend({}, state, {
        decryptEntries: AsyncState.progress(action.payload),
      });

    case Actions.DECRYPT_ENTRIES_RESULT:
      return _.extend({}, state, {
        decryptEntries: AsyncState.result(action.payload),
      });

    case Actions.DECRYPT_ENTRIES_ERROR:
      return _.extend({}, state, {
        decryptEntries: AsyncState.error(action.payload),
      });

    case Actions.DECRYPT_ENTRIES_RESET:
      return _.extend({}, state, {
        decryptEntries: AsyncState.reset(),
      });


    case Actions.UPDATE_ENTRY_START:
      return _.extend({}, state, {
        updatingEntry: AsyncState.start(),
      });

    case Actions.UPDATE_ENTRY_RESULT:
      return _.extend({}, state, {
        updatingEntry: AsyncState.result(action.payload),
      });

    case Actions.UPDATE_ENTRY_ERROR:
      return _.extend({}, state, {
        updatingEntry: AsyncState.error(action.payload),
      });

    case Actions.UPDATE_ENTRY_RESET:
      return _.extend({}, state, {
        updatingEntry: AsyncState.reset(),
      });

    case Actions.DELETE_ENTRY_START:
      return _.extend({}, state, {
        deletingEntry: AsyncState.start(),
      });
    case Actions.DELETE_ENTRY_RESULT:
      return _.extend({}, state, {
        deletingEntry: AsyncState.result(action.payload),
      });
    case Actions.DELETE_ENTRY_ERROR:
      return _.extend({}, state, {
        deletingEntry: AsyncState.error(action.payload),
      });
    case Actions.DELETE_ENTRY_RESET:
      return _.extend({}, state, {
        deletingEntry: AsyncState.reset(),
      });

    case Actions.DERIVE_KEYS_START:
      return _.extend({}, state, {
        derivingKeys: AsyncState.start(),
        derivedKeys: null,
      });

    case Actions.DERIVE_KEYS_RESULT:
      return _.extend({}, state, {
        derivingKeys: AsyncState.result(action.payload),
        derivedKeys: action.payload,
      });

    case Actions.DERIVE_KEYS_ERROR:
      return _.extend({}, state, {
        derivingKeys: AsyncState.error(action.payload),
      });

    case Actions.CHANGE_PASSWORD_START:
      return _.extend({}, state, {
        changingPassword: AsyncState.start(),
      });
    case Actions.CHANGE_PASSWORD_RESULT:
      return _.extend({}, state, {
        changingPassword: AsyncState.result(action.payload),
        password: action.payload.password,
        derivedKeys: action.payload.derivedKeys,
      });
    case Actions.CHANGE_PASSWORD_ERROR:
      return _.extend({}, state, {
        changingPassword: AsyncState.error(action.payload),
      });
    case Actions.CHANGE_PASSWORD_RESET:
      return _.extend({}, state, {
        changingPassword: AsyncState.reset(),
      });

    case Actions.EXPORT_DATA_START:
      return _.extend({}, state, {
        exporting: AsyncState.start(),
      });
    case Actions.EXPORT_DATA_RESULT:
      return _.extend({}, state, {
        exporting: AsyncState.result(action.payload),
      });
    case Actions.EXPORT_DATA_ERROR:
      return _.extend({}, state, {
        exporting: AsyncState.error(action.payload),
      });
    case Actions.EXPORT_DATA_RESET:
      return _.extend({}, state, {
        exporting: AsyncState.reset(),
      });


    case Actions.BUILD_SEARCH_INDEX_START:
      return _.extend({}, state, {
        searchIndexing: AsyncState.start(),
      });
    case Actions.BUILD_SEARCH_INDEX_RESULT:
      return _.extend({}, state, {
        searchIndexing: AsyncState.result(),
      });
    case Actions.BUILD_SEARCH_INDEX_ERROR:
      return _.extend({}, state, {
        searchIndexing: AsyncState.error(action.payload),
      });


    case Actions.SEARCH_START:
      return _.extend({}, state, {
        searching: AsyncState.start(),
        searchKeyword: action.payload.keyword,
      });
    case Actions.SEARCH_RESULT:
      return _.extend({}, state, {
        searching: AsyncState.result(action.payload),
      });
    case Actions.SEARCH_ERROR:
      return _.extend({}, state, {
        searching: AsyncState.error(action.payload),
      });

    default:
      return state;
  }
};






