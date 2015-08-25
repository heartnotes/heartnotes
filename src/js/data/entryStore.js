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
      entryDataReady: false,
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

    var {id, ts, content} = params;

    self.logger.info('update entry', id, ts, content.length);

    new Promise(function(resolve, reject) {
      var entry = self.get(id) || self.getByDate(ts);

      if (!entry) {
        ts = moment(ts || Date.now()).startOf('day').valueOf();

        self.logger.debug('create entry', ts);

        self.crypto.hash(ts, Math.random() * 100000)
          .then(function hashedVal(newId) {
            resolve({
              id: newId,
              ts: ts,
            });
          })
          .catch(reject);
      } else {
        resolve(entry);
      }
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



  delete (params) {
    var self = this;

    var {id} = params;

    self.logger.info('delete entry', id);

    new Promise(function(resolve, reject) {
      var entry = self.get(id);

      if (!entry) {
        reject(new Error('Entry not found: ' + id));
      } else {
        resolve(entry);
      }
    })
      .then(function deleteEntry(entry) {
        self.logger.debug('delete entry', entry.id);

        delete self.state.entries[entry.id];

        self.forceUpdate();
      })
      .then(function saveUserData() {
        self.flux.getStore('user').saveEntries();
      })
      .catch(function(err) {
        self.logger.error('delete entry', err);
      });
  }


  setEntries (entries) {
    var self = this;
    
    self.logger.info('set entries', _.keys(entries).length);

    self.setState({
      entries: entries,
      entryDataReady: true,
    });
  }
}


