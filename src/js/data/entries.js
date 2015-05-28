var faker = require('faker'),
  moment = require('moment');

var data = [1,2,3,4].map(function(monthIndex) {
  return {
    ts: moment('2015-0' + monthIndex + '-25').startOf('day').unix(),
    body: faker.lorem.paragraphs(5),
  };
});



/**
 * Get entries.
 * @param  {Object} options Options.
 * @return {Date} options.start start date of date range.
 * @return {Date} options.end end date of date range.
 */
exports.get = function(options) {
  return data;
};


/**
 * Get today's entry.
 */
exports.getToday = function() {
  var today = moment().startOf('day').unix();

  return data.filter(function(entry) {
    return (today === entry.ts);
  })[0];
};

