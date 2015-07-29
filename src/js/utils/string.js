var _ = require('lodash');


const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

exports.random = function(len) {

  var text = "";

  for( var i=0; i < len; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};



exports.formatDiaryDetails = function(diaryDetails) {
  let { name, storage } = (diaryDetails || {});

  name = name || '';

  switch (storage) {
    case 'file':
      // extract filename part (slow method but works well!)
      return name.replace(/^.*[\\\/]/, '');
      break;
    default:
      return name;
  }
};

