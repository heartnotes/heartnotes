"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

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
        Dispatcher.openDiary('erorr', err);
      });
  }



  loadEntries() {
    Dispatcher.loadEntries('start');

    return Q.try(() => {
      if (_.isEmpty(this._encryptedEntries)) {
        this.logger.info('no existing entries found');

        return {};
      } else {
        if (!this._meta.version) {
          return this._decryptOldFormat();
        } else {
          return this._decryptNewFormat();
        }
      }
    })
      .then(() => {
        return this._rebuildSearchIndex();
      })
      .catch((err) => {
        Dispatcher.loadEntries('error', err);
      });
  }



  /**
   * @return {Promise}
   */
  updateEntry (id, ts, content) {
    this.dispatch(Actions.UPDATE_ENTRY_START);

    let entry = this.getEntry(id) || this.getEntryByDate(ts);

    return new Q.try(() => {
      if (!entry) {
        ts = moment(ts || Date.now()).valueOf();

        this.logger.debug('create entry', ts);

        return Crypto.hash(ts, Math.random() * 100000)
          .then((newId) => {
            return resolve({
              id: newId,
              ts: ts,
            });
          });
      } else {
        return entry;
      }
    })
      .then((entry) => {
        entry.body = content;
        entry.up = moment.valueOf();
        this._entries[entry.id] = entry;

        return this._saveEntry(entry);
      })
      .then((entry) => {
        this.dispatch(Actions.UPDATE_ENTRY_RESULT, entry);

        this._addToSearchIndex(entry);
      })
      .catch(function(err) {
        this.logger.error(err);
        this.dispatch(Actions.UPDATE_ENTRY_ERROR, err);

        return Q.delay(2000).then(() => {
          this.dispatch(Actions.UPDATE_ENTRY_RESET);
        });
      });
  }


  get name () {
    return this._name;
  }


  get entries () {
    return this._entries;
  }


  /**
   * @return {Promise}
   */
  _saveEntry (entry) {
    return Crypto.encrypt(this.encryptionKey, entry)
      .then((encryptedEntry) => {
        this.encryptedEntries[entry.id] = encryptedEntry;

        return this.storage.saveDiary(this._name, {
          meta: this._meta,
          entries: this._encryptedEntries,
        });
      })
      .then(() => {
        return entry;
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

        Dispatcher.loadEntries('progress', {
          msg: 'Upgrading diary to new version'
        });

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
        this._encryptedEntries = encryptedEntries;

        return this.storage.saveDiary(this._name, {
          meta: this._meta,
          entries: this._encryptedEntries,
        });
      })
      .then(() => {
        Dispatcher.loadEntries('result');
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

    Q.all(_.map(this._encryptedEntries, (entryEnc, id) => {
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
      });
  }


  _rebuildSearchIndex() {
    let entries = this.entries;

    this.logger.debug('rebuild search index', _.keys(entries).length);

    this.dispatch(Actions.BUILD_SEARCH_INDEX_START);

    return Search.reset()
      .then(function() {
        return Search.addMany(entries);
      })
      .then(function() {
        this.dispatch(Actions.BUILD_SEARCH_INDEX_RESULT);
      })
      .catch(function(err) {
        this.dispatch(Actions.BUILD_SEARCH_INDEX_ERROR, err);
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

}





