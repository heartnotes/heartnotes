var packageJson = require('../../../package.json');

exports.app = function() {
  return {
    appVersion: packageJson.version,
    checkingForUpdates: false,
    checkingForUpdatesError: null,
    newVersionAvailable: false,
  }
};
