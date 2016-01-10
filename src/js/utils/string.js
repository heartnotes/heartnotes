import moment from 'moment';
import _ from 'lodash';


const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

exports.random = function(len) {

  var text = "";

  for( var i=0; i < len; i++ )
      text += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));

  return text;
};



exports.formatDiaryName = function(name) {
  return name.replace(/^.*[\\\/]/, '');
};




exports.generateEntryId = function(ts) {
  return moment(ts).valueOf() + '' + Math.random();
};


