var _ = require('lodash'),
  faker = require('faker'),
  moment = require('moment');

var Store = require('./store');

// var SearchIndex = require('./searchIndex');


export default class EntryStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.state = {
      entries: [],
    };

    this.registerActionIds('entry');
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

    this.logger.info('update entry', id, content.length);

    var entry;

    if (!id) {
      id = faker.random.uuid();

      this.logger.debug('create entry', id);

      var entry = {
        id: id,
        ts: moment().startOf('day').valueOf(),
        body: content
      };

      // this.searchIndex.add(entry);

      this.state.entries[id] = entry;
    } else {
      var entry = _.find(this.state.entries, function(e) {
        return e.id === id;
      });

      if (entry) {
        entry.body = content;

        // this.searchIndex.update(entry);
      }
    }

    this.forceUpdate();
  }


  setEntries (entries) {
    var self = this;
    
    self.logger.info('set entries', entries.length);

    self.setState({
      entries: entries,
    });
  }
}


