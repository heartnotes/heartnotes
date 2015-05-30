var _ = require('lodash'),
  faker = require('faker'),
  moment = require('moment');


import { Store } from 'flummox';


var data = {};

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].forEach(function(monthIndex) {
  var numEntriesToBuild = faker.random.number({
    min: 1,
    max: 28,
  });

  for (var i=0; i<numEntriesToBuild; ++i) {
    var id = faker.random.uuid();

    data[id] = {
      id: id,
      ts: moment([2014, monthIndex-1, i]).startOf('day').unix(),
      body: faker.lorem.paragraphs(5),
    };    
  }
});



class EntryStore extends Store {

  constructor(flux) {
    super();

    this.state = {
      entries: data,
    };

    const entryActionIds = flux.getActionIds('entry');
    this.register(entryActionIds.update, this.updateEntry);
  }


  get (entryId) {
    return this.state.entries[entryId];
  }


  getByDate (date) {
    var ts = moment(date).startOf('day').unix();

    return _.find(this.state.entries, function(e) {
      return e.ts === ts;
    });
  }


  getToday () {
    return this.getByDate(moment());
  }


  updateEntry(params) {
    var {id, content} = params;

    var entry;

    if (!id) {
      id = faker.random.uuid();

      var entry = {
        id: id,
        ts: moment().startOf('day').unix(),
        body: content
      };

      this.state.entries[id] = entry;
    } else {
      var entry = _.find(this.state.entries, function(e) {
        return e.id === id;
      });

      if (entry) {
        entry.body = content;
      }
    }

    this.forceUpdate();
  }

}





module.exports = {
  entries: EntryStore
};





