var _ = require('lodash');


const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

exports.random = function(len) {

  var text = "";

  for( var i=0; i < len; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};



exports.formatDiaryName = function(name) {
  return name.replace(/^.*[\\\/]/, '');
};

