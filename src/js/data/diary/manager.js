"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';

import BrowserStorage from './browser';
import FileStorage from './file';
import { Actions, buildAction } from './actions';

import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Search } from './search/index';



const LAST_ACCESSED_DIARY_KEY = 'last datafile';


export default class DiaryManager {

  constructor(dispatch, storage, data = {}) {
    this.storage = storage;
    this.dispatch = dispatch;

    this._name = data.name;
    this._entries = null;
    this._encryptedEntries = data.entries || {};
    this._meta = data.meta;
    this._derivedKeys = {};

    this.logger = Logger.create(`diary[${this.name}]`);
  }


  enterPassword(password) {
    this.dispatch(buildAction(Actions.DERIVE_KEYS_START, {
      password: password,
    }));

    return Crypto.deriveKey(password, {
      salt: this.meta.salt,
      iterations: this.meta.iterations,
    })
      .then((derivedKeyData) => {
        this._derivedKeys = derivedKeyData;

        // now test that keys are correct
        return Crypto.decrypt(this.encryptionKey, this.meta.keyTest)
          .then((plainData) => {
            if (plainData !== this.encryptionKey) {
              throw new Error('Password incorrect');
            }

            this.dispatch(buildAction(Actions.DERIVE_KEYS_RESULT));
          })
          .catch((err) => {
            this.dispatch(buildAction(Actions.DERIVE_KEYS_ERROR, err));

            throw err;
          });
      });
  }




  decryptEntries() {
    if (!this.encryptionKey) {
      return Q.reject(new Error('Please enter a password first.'));
    }

    this.dispatch(buildAction(Actions.LOAD_ENTRIES_START));

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



  _decryptOldFormat () {
    return Crypto.decrypt(
      this.encryptionKey, this.encryptedEntries
    )
      .then((entries) => {
        this._entries = entries;
        this._encryptedEntries = {};  // clear original so that we can save to new format

        this.dispatch(buildAction(Actions.LOAD_ENTRIES_RESULT, {
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

    this.dispatch(buildAction(Actions.LOAD_ENTRIES_RESULT, {
      entries: this._entries
    }));

    Q.map(_.values(this.encryptedEntries), (encryptedEntry) => {
      Crypto.decrypt(this.encryptionKey, encryptedEntry)
        .then((entry) => {
          this._entries[entry.id] = entry;

          return this._addToSearchIndex(entry);
        })
        .catch((err) => {
          this.logger.error(err);

          this.dispatch(buildAction(Actions.DECRYPT_ENTRY_ERROR, err));
        })
    });

    return entries;
  }


  _rebuildSearchIndex() {
    let entries = this.entries;

    this.logger.debug('rebuild search index', _.keys(entries).length);

    this.dispatch(buildAction(Actions.BUILD_SEARCH_INDEX_START));

    return Search.reset()
      .then(function() {
        return Search.addMany(entries);
      })
      .then(function() {
        this.dispatch(buildAction(Actions.BUILD_SEARCH_INDEX_RESULT));
      })
      .catch(function(err) {
        this.dispatch(buildAction(Actions.BUILD_SEARCH_INDEX_ERROR, err));
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



    this.dispatch(buildAction(Actions.DERIVE_KEYS_START, {
      password: password,
    }));

    return Crypto.deriveKey(password, {
      salt: this.meta.salt,
      iterations: this.meta.iterations,
    })
      .then((derivedKeyData) => {
        this._derivedKeys = derivedKeyData;

        // now test that keys are correct
        return Crypto.decrypt(this.encryptionKey, this.meta.keyTest)
          .then((plainData) => {
            if (plainData !== this.encryptionKey) {
              throw new Error('Password incorrect');
            }

            this.dispatch(buildAction(Actions.DERIVE_KEYS_RESULT));
          })
          .catch((err) => {
            this.dispatch(buildAction(Actions.DERIVE_KEYS_ERROR, err));

            throw err;
          });
      });
  }




  /**
   * @return {Promise}
   */
  saveEntry (dispatch, entry) {
    return this._ensureLoaded(dispatch)
      .then(() => {
        return Crypto.encrypt(this.encryptionKey, entry)
      })
      .then((encryptedEntry) => {
        this.entries[entry.id] = encryptedEntry;

        return this.storage.saveDiary({
          name: this.name,
          meta: this.meta,
          entries: this.encryptedEntries,
        });
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


  _ensureLoaded (dispatch) {
    if (!this._entries && this._encryptedEntries) {
      return this._decryptEntries(dispatch);
    } else {
      return Q.reject(new Error('Diary not loaded'));
    }
  }

  /**
   * @return {Promise}
   */
  _decryptEntries () {

  }
}



export function new DiaryManager()
