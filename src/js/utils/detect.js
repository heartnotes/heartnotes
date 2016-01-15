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


exports.serverHost = function() {
  if (exports.inDevMode()) {
    return 'http://127.0.0.1:3010';
  } else {
    return 'https://heartnot.es';    
  }
};


console.log ('MODE: ' + exports.getMode());



