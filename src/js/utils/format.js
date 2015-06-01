"use strict";

exports.htmlToStr = function(html) {
  return $(`<div>${html}</div>`).text();
};


