var _ = require('lodash');


var _sortEntriesChrono = function(entries = {}, reverse = false) {
  var entries = _.values(entries);

  entries.sort(function(a, b) {
    if (a.ts === b.ts) {
      return 0;
    } else if (a.ts < b.ts) {
      return reverse ? 1 : -1;
    } else {
      return reverse ? -1 : 1;
    }
  });

  return entries;
};



exports.sortEntriesReverseChrono = function(entries) {
  return _sortEntriesChrono(entries, true);
};



exports.sortEntriesForwardChrono = function(entries) {
  return _sortEntriesChrono(entries, false);
};

