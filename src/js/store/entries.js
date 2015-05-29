var faker = require('faker'),
  moment = require('moment');


import { Store } from 'flummox';


var data = [];

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].forEach(function(monthIndex) {
  var numEntriesToBuild = faker.random.number({
    min: 1,
    max: 28,
  });

  for (var i=0; i<numEntriesToBuild; ++i) {
    data.push({
      id: faker.random.uuid(),
      ts: moment([2014, monthIndex-1, i]).startOf('day').unix(),
      body: faker.lorem.paragraphs(5),
    });    
  }
});



export class EntryStore extends Store {

  constructor(flux) {
    super();

    this.state = {
      entries: data,
    };

    const messageActionIds = flux.getActionIds('entries');
    this.register(entries.update, this.updateEntry);
  }


  updateEntry(params) {
    var {id, content} = parmas;

    var entry;

    if (!entryId) {
      var entry = {
        id: faker.random.uuid(),
        ts: moment().startOf('day').unix(),
        body: newContent
      };

      this.setState({
        entries: this.state.entries.push(entry)
      });
    } else {
      var entry = _.find(this.state.entries, function(e) {
        return e.id === entryId;
      });

      if (entry) {
        entry.body = newContent;

        this.forceUpdate();
      }
    }
  }
}






