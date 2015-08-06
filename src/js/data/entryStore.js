var _ = require('lodash'),
  moment = require('moment');

var Store = require('./store'),
  Crypto = require('./crypto/index');


// var SearchIndex = require('./searchIndex');


export default class EntryStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.crypto = new Crypto(flux, logger.create('Crypto'));

    this.state = {
      entries: {},
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
    var ts = moment(date).startOf('day').valueOf();

    this.logger.debug('get by date', date, ts);

    var entry = _.find(this.state.entries, function(e) {
      return e.ts === ts;
    });

    this.logger.debug('got by date', ts, entry ? entry.id : null);

    return entry;
  }


  getToday () {
    this.logger.debug('get today');

    return this.getByDate(moment());
  }


  update(params) {
    var self = this;

    var {id, content} = params;

    self.logger.info('update entry', id, content.length);

    new Promise(function(resolve, reject) {
      var entry;

      if (!id) {
        resolve(self.getToday());
      } else {
        entry = _.find(self.state.entries, function(e) {
          return e.id === id;
        });

        if (!entry) {
          reject(new Error('Entry not found: ' + id));
        } else {
          resolve(entry);
        }
      }
    })
      .then(function createEntryIfNeeded(entry) {
        if (entry) {
          return entry;
        }

        // else create entry for today
        
        var today = moment(),
          ts = today.startOf('day').valueOf();

        self.logger.debug('create entry', today, ts);

        return self.crypto.hash(ts, Math.random() * 100000)
          .then(function hashedVal(hashVal) {
            return {
              id: hashVal,
              ts: ts,
            };
          });
      })
      .then(function entryReady(entry) {
        entry.body = content;

        self.state.entries[entry.id] = entry;

        self.setState({
          entries: self.state.entries
        });

        self.forceUpdate();
      })
      .then(function saveUserData() {
        self.flux.getStore('user').saveEntries();
      })
      .catch(function(err) {
        self.logger.error('update entry', err);
      });
  }



  setEntries (entries) {
    var self = this;
    
    self.logger.info('set entries', entries.length);

    self.setState({
      entries: entries,
    });
  }
}


