var packageJSON  = require('../../../package.json');

const MODE_PRODUCTION = 'PRODUCTION';
const MODE_DEVELOPMENT = 'DEVELOPMENT';




exports.isElectronApp = function() {
  return 0 <= navigator.appVersion.indexOf('Electron');
};


exports.version = function() {
  return packageJSON.version;
};


exports.getMode = function() {
  // replaced at build time
  if ('__BUILD_TYPE__' === MODE_PRODUCTION) {
    return MODE_PRODUCTION;
  } else {
    return MODE_DEVELOPMENT;
  }
};

exports.inDevMode = function() {
  return exports.getMode() === MODE_DEVELOPMENT;
};


console.log ('MODE: ' + exports.getMode());



