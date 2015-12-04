"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

import BrowserStorage from './browser';
import FileStorage from './file';
import { Actions, buildAction } from './actions';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Search } from './search/index';
import { instance as Storage } from '../storage/index';
import { instance as Dispatcher } from './dispatcher';
import { instance as Auth } from '../auth/index';


const LAST_ACCESSED_DIARY_KEY = 'last datafile';


/**
 * Represents a diary.
 */
export default class Diary {

  constructor(data = {}) {
    this._name = data.name;
    this._entries = null;
    this._encryptedEntries = data.entries || {};
    this._meta = data.meta;
    this._derivedKeys = {};

    this.logger = Logger.create(`diary[${this.name}]`);
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

    return Auth.enterPassword(password, this.meta)
      .then(() => {
        Dispatcher.openDiary('result', this);
      })
      .catch((err) => {
        Dispatcher.openDiary('erorr', err);
      });
  }



  decryptEntries() {
    if (!this.encryptionKey) {
      return Q.reject(new Error('Please enter a password first.'));
    }

    this.dispatch(Actions.LOAD_ENTRIES_START);

    return Q.try(() => {
      if (_.isEmpty(this.encryptedEntries)) {
        this.logger.info('no existing entries found');

        return {};
      } else {
        if (!this.meta.format || '1.0.0' === this.meta.format) {
          return this._decryptOldFormat();
        } else {
          return this._decryptNewFormat(this.meta.format);
        }
      }
    })
      .then(() => {
        this._rebuildSearchIndex();
      })
  }



  /**
   * @return {Promise}
   */
  updateEntry (id, ts, content) {
    this.dispatch(Actions.UPDATE_ENTRY_START);

    let entry = this.getEntry(id) || this.getEntryByDate(ts);

    return new Q.try(() => {
      if (!entry) {
        ts = moment(ts || Date.now()).startOf('day').valueOf();

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
        this.entries[entry.id] = entry;

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


  /**
   * @return {Promise}
   */
  _saveEntry (entry) {
    return Crypto.encrypt(this.encryptionKey, entry)
      .then((encryptedEntry) => {
        this.encryptedEntries[entry.id] = encryptedEntry;

        return this.storage.saveDiary({
          name: this.name,
          meta: this.meta,
          entries: this.encryptedEntries,
        });
      })
      .then(() => {
        return entry;
      });
  }


  get meta () {
    return this._meta;
  }

  get name () {
    return this._name;
  }

  get entries () {
    return this._entries;
  }

  get encryptedEntries () {
    return this._encryptedEntries;
  }

  get encryptionKey () {
    return this._derivedKeys.key1;
  }


  _decryptOldFormat () {
    return Crypto.decrypt(
      this.encryptionKey, this.encryptedEntries
    )
      .then((entries) => {
        this._entries = entries;
        this._encryptedEntries = {};  // clear original so that we can save to new format

        this.dispatch(Actions.LOAD_ENTRIES_RESULT, {
          entries: entries
        }));

        return this._rebuildSearchIndex();
      });
  }


  _decryptNewFormat () {
    this._entries = {};

    _.each(this.encryptedEntries, (e) => {
      this._entries[e.id] = {
        decrypting: true,
      };
    });

    this.dispatch(Actions.LOAD_ENTRIES_RESULT, {
      entries: this._entries
    });

    Q.map(_.values(this.encryptedEntries), (encryptedEntry) => {
      Crypto.decrypt(this.encryptionKey, encryptedEntry)
        .then((entry) => {
          this._entries[entry.id] = entry;

          return this._addToSearchIndex(entry);
        })
        .catch((err) => {
          this.logger.error(err);

          this.dispatch(Actions.DECRYPT_ENTRY_ERROR, err);
        })
    });

    return entries;
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


  dispatch (actionId, arg = {}) {
    this._dispatcher(buildAction(action, arg));
  }

}


