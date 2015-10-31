"use strict";

exports.htmlToStr = function(html) {
  var div = document.createElement('DIV');
  div.innerHTML = html;
  return div.innerText;
};


