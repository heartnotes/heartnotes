import { version } from '../../../package.json';


exports.app = function() {
  return {
    version: version,
    checkingForUpdate: {},
    sendingFeedback: {},
    newVersionAvailable: false,
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
  };
};


