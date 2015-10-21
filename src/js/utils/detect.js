exports.isElectronApp = function() {
  return !!process;
};


exports.inDevMode = function() {
  return false;
};