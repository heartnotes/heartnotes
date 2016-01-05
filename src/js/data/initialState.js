import { version } from '../../../package.json';


exports.app = function() {
  return {
    version: version,
    backgroundTasks: {},
    fetchingPricing: {},
    paying: {},
    checkingForUpdate: {},
    sendingFeedback: {},
    newVersionAvailable: false,
    loadingScript: {},
    scripts: {},
  }
};


exports.alert = function() {
  return {
    msg: null,
    type: null,
  };
};


exports.diary = function() {
  return {
    name: null,
    derivedKeys: null,
    entries: null,
    creating: {},
    loggingIn: {},
    signingUp: {},
    opening: {},
    choosing: {},
    exporting: {},
    decryptEntries: {},
    derivingKeys: {},
    changingPassword: {},
    loadingEntries: {},
    updatingEntry: {},
    deletingEntry: {},
    searchIndexing: {},
    searching: {},
    makingBackup: {},
    restoringBackup: {},
    restoringFromOldDiary: {},
  };
};


