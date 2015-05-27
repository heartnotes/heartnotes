var faker = require('faker'),
  moment = require('moment');

var data = [
  {
    ts: moment('2015-01-25').toDate(),
    body: faker.lorem.paragraphs(5),
  },
  {
    ts: moment('2015-02-25').toDate(),
    body: faker.lorem.paragraphs(5),
  },
  {
    ts: moment('2015-03-25').toDate(),
    body: faker.lorem.paragraphs(5),
  },
  {
    ts: moment('2015-04-25').toDate(),
    body: faker.lorem.paragraphs(5),
  },
]


/**
 * Get entries.
 * @param  {Object} options Options.
 * @return {Date} options.start start date of date range.
 * @return {Date} options.end end date of date range.
 */
exports.get = function(options) {
  return data;
};