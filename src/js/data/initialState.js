import { version } from '../../../package.json';


exports.app = function() {
  return {
    version: version,
    checkingForUpdate: {},
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
    opening: {},
    choosing: {},
    exporting: {},
    derivingKeys: {},
    changingPassword: {},
    loadingEntries: {},
    updatingEntry: {},
    deletingEntry: {},
    searchIndexing: {},
    searching: {},
    saveEntriesRequested: 0,
  };
};


