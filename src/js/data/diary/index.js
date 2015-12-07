"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';
import Q from 'bluebird';
import moment from 'moment';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Search } from '../search/index';
import { instance as Storage } from '../storage/index';
import { instance as Dispatcher } from '../dispatcher';
import { instance as Auth } from '../auth/index';




/**
 * Represents a diary.
 */
export default class Diary {

  constructor(name, data = {}) {
    this._name = name;
    this._entries = null;
    this._encryptedEntries = data.entries || {};
    this._meta = data.meta;

    this.logger = Logger.create(`diary[${name}]`);
  }


  /**
   * Open this diary using given password.
   * 
   * @return {Promise}
   */
  open (password) {
    Dispatcher.openDiary('start', {
      name: name,
      password: password,
    });

    return Auth.enterPassword(password, this._meta)
      .then(() => {
        Dispatcher.openDiary('result', this);
      })
      .catch((err) => {
        Dispatcher.openDiary('error', err);

        throw err;
      });
  }



  loadEntries() {
    Dispatcher.loadEntries('start');

    return Q.try(() => {
      if (_.isEmpty(this._encryptedEntries)) {
        this.logger.info('no existing entries found');

        this._entries = {};

        Dispatcher.loadEntries('result');

        return this._rebuildSearchIndex();
      } else {
        this.logger.info('existing entries found');

        if (!this._meta.version) {
          return this._decryptOldFormat();
        } else {
          return this._decryptNewFormat();
        }
      }
    })
      .catch((err) => {
        Dispatcher.loadEntries('error', err);

        throw err;
      });
  }



  /**
   * @return {Promise}
   */
  updateEntry (id, ts, content) {
    Dispatcher.updateEntry('start');

    let entry = this.getEntryById(id) || this.getEntryByDate(ts);

    return Q.try(() => {
      if (!entry) {
        ts = moment(ts || Date.now()).valueOf();

        this.logger.debug('create entry', ts);

        return Crypto.hash(ts, Math.random() * 100000)
          .then((newId) => {
            return {
              id: newId,
              ts: ts,
            };
          });
      } else {
        return entry;
      }
    })
      .then((entry) => {
        this.logger.debug('update entry');

        entry.body = content;
        entry.up = moment.valueOf();
        this._entries[entry.id] = entry;

        return this._saveEntry(entry);
      })
      .then((entry) => {
        Dispatcher.updateEntry('result');

        return this._addToSearchIndex(entry);
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.updateEntry('error', err);

        throw err;
      });
  }



  /**
   * @return {Promise}
   */
  deleteEntry (id) {
    if (!this._entries[id]) {
      return Q.reject(new Error('Entry not found: ' + id));
    }

    Dispatcher.deleteEntry('start');

    delete this._entries[id];
    delete this._encryptedEntries[id];

    return this._saveDiary()
      .then(() => {
        Dispatcher.deleteEntry('result');
      })
      .then(() => {
        return this._removeFromSearchIndex(id);
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.deleteEntry('error', err);

        throw err;
      });
  }



  get name () {
    return this._name;
  }


  get entries () {
    return this._entries;
  }

  get timelineEntries () {
    // TODO: if have a search filter then show filtered entries
    return this._entries;
  }



  getEntryById (id) {
    this.logger.debug('get entry by id', id);

    return (this._entries || {})[id];
  }


  getEntryByDate (date) {
    var ts = moment(date).startOf('day').valueOf();

    this.logger.debug('get entry by date', date, ts);

    var entry = _.find(this._entries || {}, function(e) {
      return moment(e.ts).startOf('day').valueOf() === ts;
    });

    if (entry) {
      this.logger.debug('got by date', ts, entry.id);
    }

    return entry;
  }


  getEntryForToday () {
    this.logger.debug('get today\'s entry');
    
    return this.getEntryByDate(new Date());
  }



  /**
   * @return {Promise}
   */
  _saveEntry (entry) {
    this.logger.debug('save entry', entry.id);

    return Crypto.encrypt(Auth.encryptionKey, entry)
      .then((encryptedEntry) => {
        this._encryptedEntries[entry.id] = encryptedEntry;

        return this._saveDiary();
      })
      .then(() => {
        return entry;
      });
  }



  /**
   * @return {Promise}
   */
  _saveDiary () {
    this.logger.debug('save to storage');

    return Storage.saveDiary(this._name, {
      meta: this._meta,
      entries: this._encryptedEntries,
    });
  }



  _decryptOldFormat () {
    this._entries = {};

    return Crypto.decrypt(
      Auth.encryptionKey, this._encryptedEntries
    )
      .then((entries) => {
        this._entries = entries;
        this._encryptedEntries = {};  // clear original so that we can save to new version

        Dispatcher.loadEntries('progress', 'Upgrading to new format');

        // now let's re-save each entry, individually encrypted
        return Q.props(_.mapValues(entries, (entry) => {
          return Crypto.encrypt(Auth.encryptionKey, {
            body: entry.body,
            ts: entry.ts,
            up: entry.up,
          });
        }));
      })
      .then((encryptedEntries) => {
        Dispatcher.loadEntries('progress', 'Saving new format');

        this._encryptedEntries = encryptedEntries;

        return this.storage.saveDiary(this._name, {
          meta: this._meta,
          entries: this._encryptedEntries,
        });
      })
      .then(() => {
        Dispatcher.loadEntries('result');

        return this._rebuildSearchIndex();
      });
  }


  _decryptNewFormat () {
    this._entries = {};

    _.each(this._encryptedEntries, (e, id) => {
      this._entries[id] = {
        id: id,
        decrypting: true,
      };
    });

    let total = _.keys(this._encryptedEntries).length;
    let done = 0;


    return Q.all(_.map(this._encryptedEntries, (entryEnc, id) => {
      return Crypto.decrypt(Auth.encryptionKey, entryEnc)
        .then((entry) => {
          entry.id = id;

          this._entries[id] = entry;

          Dispatcher.loadEntries('progress', `Decrypting...(${++done}/${total})`);
        })
        .catch((err) => {
          this.logger.error(err);

          Dispatcher.loadEntry('error', `Error decrypting entry ${id}`);

          throw err;
        });
    }))
      .then(() => {
        Dispatcher.loadEntries('result');

        return this._rebuildSearchIndex();
      });
  }


  _rebuildSearchIndex() {
    let entries = this.entries;

    this.logger.debug('rebuild search index', _.keys(entries).length);

    Dispatcher.buildSearchIndex('start');

    return Search.reset()
      .then(() => {
        return Search.addMany(entries);
      })
      .then(() => {
        Dispatcher.buildSearchIndex('result');
      })
      .catch((err) => {
        Dispatcher.buildSearchIndex('error', err);
      });
  }


  _addToSearchIndex(entry) {
    this.logger.debug('add to search index', entry.id);

    return Search.add({
      id: entry.id,
      ts: entry.ts,
      body: entry.body,
    });
  }

  _removeFromSearchIndex(id) {
    this.logger.debug('remove from search index', id);

    return Search.remove({
      id: id,
    });
  }

}


Diary.createNew = (meta) => {
  return Storage.createNewDiary({
    meta: meta
  });
};


