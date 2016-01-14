"use strict";

import _ from 'lodash';
import Logger from '../../utils/logger';
import Q from 'bluebird';
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Search } from '../search/index';
import { instance as Storage } from '../storage/index';
import { instance as Dispatcher } from '../dispatcher';
import Api from '../api/index';
import Auth from '../auth/index';
import ExportedEntries from '../../ui/components/exportedEntries';
import * as DateUtils from '../../utils/date';
import * as StringUtils from '../../utils/string';
import Decryptor from './decryptor';
import Sync from './sync';


/**
 * Represents a diary.
 */
export default class Diary {

  constructor(id, auth) {
    this._id = id;
    this._auth = auth;

    this._encryptedEntries = {};
    this._entries = {};

    this.logger = Logger.create(`diary-${this._id}`);

    this.decryptor = new Decryptor(this.logger, auth);
  }


  destroy () {
    return Q.try(() => {
      this._stopSync();
    })
      .then(() => {
        return this._auth.logout();
      });
  }


  /**
   * Call this after construction to load settings.
   * 
   * @return {Promise}
   */
  loadSettings() {
    Dispatcher.loadSettings('start');

    return Storage.local.loadSettings(this._id)
      .then((settings) => {
        Dispatcher.loadSettings('result');

        this._settings = settings || {};
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.loadSettings('error', err);

        throw err;
      });
  }



  loadEntries() {
    Dispatcher.loadEntries('start');

    this._entries = {};

    return this._loadEncryptedEntries()
      .then((encryptedEntries) => {
        this._encryptedEntries = encryptedEntries || {};

        return this.decryptor.decryptEntriesLoadedFromStorage(this._encryptedEntries);
      })
      .then((result) => {
        this.logger.debug('loaded entries');

        this._encryptedEntries = result.encryptedEntries;
        this._entries = result.entries;

        return this._saveEncryptedEntries();
      })
      .then(() => {
        Dispatcher.loadEntries('result');

        this._startSync();
        this._rebuildSearchIndex();
      })
      .catch((err) => {
        Dispatcher.loadEntries('error', new Error('There was an error loading your diary entries.'));

        throw err;
      });
  }



  /**
   * @return {Promise}
   */
  updateEntry (id, ts, content) {
    Dispatcher.updateEntry('start');

    let entry = this.getEntryById(id);

    return Q.try(() => {
      if (!entry) {
        return this.getOrCreateEntryForDate(ts);
      } else {
        return entry;
      }
    })
      .then((entry) => {
        this.logger.debug('update entry');

        entry.body = content;
        entry.up = moment().valueOf();
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

    return this._saveEncryptedEntries()
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


  /**
   * @return {Promise}
   */
  changePassword (oldPassword, newPassword) {
    return this._auth.changePassword(oldPassword, newPassword);
  }


  /**
   * @return {Promise}
   */
  exportToFile () {
    Dispatcher.exportToFile('start');

    let content = ReactDOMServer.renderToString(
      <ExportedEntries entries={this.entries} />
    );

    return Storage.export.saveNewHtmlFile(content)
      .then(function didUserCancel(filePath) {
        // user cancelled?
        if (!filePath) {
          return Dispatcher.exportToFile('reset');
        }

        Dispatcher.exportToFile('result', {
          filePath: filePath
        });
      })
      .catch(function(err) {
        this.logger.error(err);

        Dispatcher.exportToFile('error', err);

        throw err;
      });
  }


  /**
   * @return {Promise}
   */
  makeBackup() {
    Dispatcher.backup('start');

    return Storage.backup.selectNewBackupFile()
      .then((path) => {
        if (!path) {
          return;
        }

        // encrypt entries and id
        return Crypto.encrypt(this._auth.encryptionKey, {
          id: this._id,
          entries: this._entries,
        })
          .then((encryptedData) => {
            return Storage.backup.saveBackup(path, {
              data: encryptedData,
            });
          })
          .then(() => {
            Dispatcher.alertUser('Backup successful');

            _.set(this._settings, 'backup.lastTime', Date.now());

            return this._saveSettings();
          });
      })
      .then(() => {
        Dispatcher.backup('result');
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.backup('error', err);

        throw err;
      });
  }



  /**
   * @return {Promise}
   */
  restoreBackup() {
    Dispatcher.restore('start');

    return Storage.backup.selectExistingBackupFile()
      .then((path) => {
        if (!path) {
          return;
        }

        // load
        return Storage.backup.loadBackup(path)
          .then((raw) => {
            let { data } = raw;

            return Crypto.decrypt(this._auth.encryptionKey, data)
              .catch((err) => {
                this.logger.error(err);

                throw new Error("Backup file is corrupted or in an unrecognized format");
              });
          })
          .then((data) => {
            let { id, entries } = data;

            if (id !== this._id) {
              throw new Error('Backup data is for different account: ' + id);
            }

            let total = _.values(entries).length,
              done = 0;

            this._entries = entries;

            return this.decryptor.encrypt(this._entries, {
              setUpdatedTo: Date.now(),
              onEach: (encryptedEntry) => {
                Dispatcher.restore('progress', `Restoring...(${++done}/${total})`);

                return encryptedEntry; 
              }
            });
          })
          .then((encryptedEntries) => {
            this._encryptedEntries = encryptedEntries;

            return this._saveEncryptedEntries();
          })
          .then(() => {
            Dispatcher.alertUser('Restore successful');
          });
      })
      .then(() => {
        Dispatcher.restore('result');

        this._rebuildSearchIndex();
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.restore('error', err);

        throw err;
      });
  }


  selectOldDiaryFile () {
    return Storage.backup.selectExistingBackupFile();
  }


  restoreFromOldDiaryFile (filePath, password) {
    Dispatcher.restoreFromOldDiary('start');

    // load
    return Storage.backup.loadBackup(filePath)
      .then((raw) => {
        let auth = new Auth(raw.meta);

        let decryptor = new Decryptor(
          this.logger.create('restore_from_old_diary'), 
          auth
        );

        Dispatcher.restoreFromOldDiary('progress', 'Checking password...');

        return auth.enterPassword(password)
          .then(() => {
            Dispatcher.restoreFromOldDiary('progress', 'Decrypting...');

            let done = 0;

            return decryptor.decryptEntriesLoadedFromStorage(raw.entries, {
              shouldReEncrypt: true,
              reEncryptOptions: {
                auth: this._auth,
                setUpdatedTo: Date.now(),
                onEach: (encryptedEntry) => {
                  Dispatcher.restoreFromOldDiary('progress', `Restoring...${++done}`);

                  return encryptedEntry; 
                },
              },
            });
          })
          .then((data) => {
            this._entries = data.entries;
            this._encryptedEntries = data.encryptedEntries;

            return this._saveEncryptedEntries();
          })
          .then(() => {
            Dispatcher.alertUser('Restore successful');

            Dispatcher.restoreFromOldDiary('result');

            this._rebuildSearchIndex();
          });
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.restoreFromOldDiary('error', err);

        throw err;
      });
  }



  getEntryById (id) {
    this.logger.debug('get entry by id', id);

    return (this._entries || {})[id];
  }


  getEntryByDate (date) {
    var ts = DateUtils.getNormalizedTimestamp(date);

    this.logger.debug('get entry by date', date, ts);

    var entry = _.find(this._entries || {}, function(e) {
      return DateUtils.getNormalizedTimestamp(e.ts) === ts;
    });

    if (entry) {
      this.logger.debug('got by date', ts, entry.id);
    }

    return entry;
  }


  didEntryGetUpdatedInLastSync (id) {
    return this._sync.didEntryGetUpdatedInLastSync(id);
  }


  removeEntryLastSyncUpdatedIndicator (id) {
    return this._sync.removeEntryLastSyncUpdatedIndicator(id);
  }


  /**
   * @return {Promise}
   */
  getOrCreateEntryForDate (ts) {
    this.logger.debug('get or create entry for date', ts || 'now');

    ts = ts || Date.now();

    return Q.try(() => {
      var entry = this.getEntryByDate(ts);

      if (entry) {
        return entry;
      }

      ts = DateUtils.getNormalizedTimestamp(ts);

      this.logger.debug('create entry', ts);

      entry = {
        id: StringUtils.generateEntryId(ts),
        ts: ts,        
      };

      this._entries[entry.id] = entry;

      return entry;
    });
  }



  get id () {
    return this._id;
  }


  get entries () {
    // filter out empty entries
    let entries = {};

    _.each(this._entries, (e, id) => {
      if (_.get(e, 'body.length')) {
        entries[id] = e;
      }
    });

    return entries;
  }


  get backupLastTime () {
    let ts = _.get(this._settings, 'backup.lastTime', 0);

    return moment(ts).toDate();
  }


  get auth () {
    return this._auth;
  }


  _loadEncryptedEntries () {
    return Storage.local.loadEntries(this._id) || {};
  }


  _saveEncryptedEntries () {
    return Storage.local.saveEntries(this._id, this._encryptedEntries);
  }


  _saveSettings () {
    return Storage.local.saveSettings(this._id, this._settings);
  }


  /**
   * @return {Promise}
   */
  _saveEntry (entry) {
    this.logger.debug('save entry', entry.id);

    return Crypto.encrypt(this._auth.encryptionKey, entry)
      .then((encryptedEntry) => {
        this._encryptedEntries[entry.id] = encryptedEntry;

        return this._saveEncryptedEntries();
      })
      .then(() => {
        return entry;
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


  _startSync () {
    if (this._sync) {
      return;
    }

    this._sync = new Sync(this);
    this._sync.start();
  }

  _stopSync () {
    if (this._sync) {
      this._sync.stop();
    }
  }


}



Diary._new = function(id, auth) {
  let d = new Diary(id, auth);

  return d.loadSettings()
    .then(() => {
      return d;
    });
}



Diary.createNew = function(id, password) {
  let auth = new Auth();

  return auth.signUp(id, password)
    .then(() => {
      return Diary._new(id, auth);
    });
};


Diary.open = function(id, password) {
  let auth = new Auth();

  return auth.login(id, password)
    .then(() => {
      return Diary._new(id, auth);
    });
};




