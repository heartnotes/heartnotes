import { version } from '../../../package.json';


exports.app = function() {
  return {
    version: version,
    checkingForUpdate: {},
    newVersionAvailable: false,
  }
};


exports.diary = function() {
  return {
    derivedKeys: null,
    entriesLoaded: false,

    creating: {},
    opening: {},
    choosing: {},
    exporting: {},
    derivingKeys: {},
    changingPassword: {},
    loadingEntries: {},
    savingEntries: {},
  };
};


