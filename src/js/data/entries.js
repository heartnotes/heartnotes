var faker = require('faker'),
  moment = require('moment');

var data = [];

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].forEach(function(monthIndex) {

  var numEntriesToBuild = faker.random.number({
    min: 1,
    max: 28,
  });

  for (var i=0; i<numEntriesToBuild; ++i) {
    data.push({
      ts: moment([2014, monthIndex-1, i]).startOf('day').unix(),
      body: faker.lorem.paragraphs(5),
    });    
  }
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



