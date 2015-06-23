var _ = require('lodash'),
  faker = require('faker'),
  moment = require('moment');

var Store = require('./store');


// var data = {};

// var range = {
//   2014: [1,2,3,4,5,6,7,8,9,10,11,12],
//   2015: [1,2,3,4,5]
// };

// _.forEach(range, function(months, year) {
//   _.forEach(months, function(monthIndex) {
//     var numEntriesToBuild = faker.random.number({
//       min: 1,
//       max: 28,
//     });

//     for (var i=1; i<=numEntriesToBuild; ++i) {
//       var d = moment([year, monthIndex-1, i]).startOf('day');

//       var id = d.format('YYYY-MM-DD-') + faker.random.number({
//         min: 10000,
//         max: 100000
//       });

//       data[id] = {
//         id: id,
//         ts: d.valueOf(),
//         body: faker.lorem.paragraphs(5),
//       };    
//     }
//   });
// });


var SearchIndex = require('./searchIndex');


export default class EntryStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.state = {
      entries: [],
    };

    this.registerActionIds('user');
  }


  search () {
    this.logger.debug('search');

    return this.state.entries;
  }


  get (entryId) {
    this.logger.debug('get', entryId);

    return this.state.entries[entryId];
  }


  getByDate (date) {
    this.logger.debug('get by date', date);

    var ts = moment(date).startOf('day').valueOf();

    return _.find(this.state.entries, function(e) {
      return e.ts === ts;
    });
  }


  getToday () {
    this.logger.debug('get today');

    return this.getByDate(moment());
  }


  update(params) {
    var {id, content} = params;

    this.logger.debug('update entry', id, content.length);

    var entry;

    if (!id) {
      id = faker.random.uuid();

      this.logger.debug('create entry', id);

      var entry = {
        id: id,
        ts: moment().startOf('day').valueOf(),
        body: content
      };

      this.searchIndex.add(entry);

      this.state.entries[id] = entry;
    } else {
      var entry = _.find(this.state.entries, function(e) {
        return e.id === id;
      });

      if (entry) {
        entry.body = content;

        this.searchIndex.update(entry);
      }
    }

    this.forceUpdate();
  }

}


