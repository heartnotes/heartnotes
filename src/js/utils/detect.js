var packageJSON  = require('../../../package.json');


exports.isElectronApp = function() {
  return !!process;
};


exports.version = function() {
  return packageJSON.version;
};


exports.inDevMode = function() {
  return false;
};



