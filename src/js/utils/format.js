"use strict";

var $ = require('jquery');


exports.htmlToStr = function(html) {
  return $(`<div>${html}</div>`).text();
};


