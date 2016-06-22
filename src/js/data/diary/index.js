"use strict";

import _ from 'lodash';
import Q from 'bluebird';
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


import Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Search } from '../search/index';
import { instance as Storage } from '../storage/index';
import { instance as Dispatcher } from '../dispatcher';
import Auth from '../auth/index';
import ExportedEntries from '../../ui/components/exportedEntries';
import * as DateUtils from '../../utils/date';
import * as StringUtils from '../../utils/string';
import Sync from './sync';

const Logger = require('../../utils/logger').create('Diary');





/**
 * Represents a diary.
 */
export default class Diary {

  constructor(id, auth) {
    this._id = id;
    this._auth = auth;

    this._entries = {};

    this.logger = Logger.create(this._id);
  }


  close () {
    return Q.try(() => {
      this._stopSync();
    })
      .then(() => {
        return this._auth.logout();
      })
      .then(() => {
        Dispatcher.closeDiary();
      });
  }


  enableCloudSync (id, password) {
    Dispatcher.enableCloudSync('start');

    let auth = new Auth('cloud');

    return Q.try(() => {
      if (!this.auth.isLocalType) {
        throw new Error('Diary already linked to cloud account');
      }
    })
      .then(() => {
        Dispatcher.enableCloudSync('progress', 'Creating account');

        return auth.signUp(id, password);
      })
      .then(() => {
        this._id = id;
        this._auth = auth;

        Dispatcher.enableCloudSync('progress', 'Saving diary');

        return this._saveEntriesToStorage(this.confirmedEntries);
      })
      .then(() => {
        // remove all traces of local diary
        return Storage.local.removeLocalDiary(this.id);
      })
      .then(() => {
        // start sync
        this._startSync();

        Dispatcher.enableCloudSync('result');
        Dispatcher.alertUser('Cloud sync enabled!');
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.enableCloudSync('error', err);

        throw err;
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

    return this._loadEntriesFromStorage()
      .then((decryptedEntries) => {
          this.logger.debug(`loaded ${_.size(decryptedEntries)} entries`);

          this._entries = decryptedEntries;
        
          Dispatcher.loadEntries('result');
      })
      .then(() => {
        this._startSync();

        this._rebuildSearchIndex();
      })
      .catch((err) => {
        Dispatcher.loadEntries('error', new Error('There was an error loading your diary entries.'));

        throw err;
      });
  }


  /**
   * For use by sync mechanism.
   * @package
   */
  _setEntry (id, entryObj) {
    this._entries[id] = entryObj;
  }


  /**
   * @return {Promise}
   */
  updateEntry (id, ts, content) {
    Dispatcher.updateEntry('start');

    let _entry = this.getEntryById(id);

    return Q.try(() => {
      if (!_entry) {
        return this.getOrCreateEntryForDate(ts);
      } else {
        return _entry;
      }
    })
      .then((entry) => {
        this.logger.debug('update entry');

        entry.body = content;
        entry.lastUpdated = moment().valueOf();

        return this._saveEntriesToStorage(this.confirmedEntries)
          .then(() => {
            Dispatcher.updateEntry('result');

            return this._addToSearchIndex(entry);
          });
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
    let entry = this._entries[id];

    if (!entry) {
      return Q.reject(new Error('Entry not found: ' + id));
    }

    Dispatcher.deleteEntry('start');

    entry.deleted = true;
    entry.lastUpdated = moment().valueOf();

    return this._saveEntriesToStorage(this.confirmedEntries)
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
    return this._auth.changePassword(oldPassword, newPassword)
      .then(() => {
        Dispatcher.alertUser('Password changed!');
      });
  }


  /**
   * @return {Promise}
   */
  exportToFile () {
    Dispatcher.exportToFile('start');

    let content = ReactDOMServer.renderToString(
      <ExportedEntries entries={this.confirmedEntries} />
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
      .then(() => {
        Dispatcher.alertUser('Diary exported!');
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
          entries: this.confirmedEntries,
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

            _.each(this._entries, (e) => {
              e.lastUpdated = Date.now();
            });

            return this._saveEntriesToStorage(this.confirmedEntries);
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
        id: StringUtils.generateEntryId(),
        ts: ts,  
        lastUpdated: null,
        body: null,
        deleted: false,
      };

      this._entries[entry.id] = entry;

      return entry;
    });
  }



  get id () {
    return this._id;
  }


  get confirmedEntries () {
    // filter out entries which have never been set
    let entries = {};

    _.each(this._entries, (e, id) => {
      if (!!e.lastUpdated) {
        entries[id] = e;
      }
    });

    return entries;
  }


  get confirmedVisibleEntries () {
    // filter out entries which have been deleted
    let entries = {};

    _.each(this.confirmedEntries, (e, id) => {
      if (!e.deleted) {
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


  _loadEntriesFromStorage () {
    Dispatcher.decryptEntries('start');

    return Storage.local.loadEntries(this._id)
      .then((enc) => {
        if (!_.get(enc, 'length')) {
          return {};
        } else {
          Dispatcher.decryptEntries('progress', 'Decrypting entries...');

          return Crypto.decrypt(this._auth.encryptionKey, enc)          
        }
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.decryptEntries(
          'error', 
          new Error('There was an error decrypting stored diary entries.')
        );

        throw err;
      }); 
  }


  _saveEntriesToStorage (entries) {
    return Crypto.encrypt(this._auth.encryptionKey, entries)
      .then((enc) => {
        return Storage.local.saveEntries(this._id, enc);
      })
  }




  _saveSettings () {
    return Storage.local.saveSettings(this._id, this._settings);
  }



  _rebuildSearchIndex() {
    let entries = this.confirmedEntries;

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

    if (!this._auth.isCloudType) {
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




Diary.createNew = function(type, id, password) {
  Dispatcher.createDiary('start', {
    id: id
  });

  let auth = new Auth(type);

  return auth.signUp(id, password)
    .then(() => {
      return Diary._new(id, auth);
    })
    .then((diaryMgr) => {
      if (!diaryMgr) {
        throw new Error('Sorry, there was an unexpected error.');
      }

      Dispatcher.createDiary('result', diaryMgr);

      Dispatcher.alertUser('Diary created!');
    })
    .catch((err) => {
      Logger.error(err);

      Dispatcher.createDiary('error', err);

      throw err;
    });

};



Diary.open = function(type, id, password) {
  Dispatcher.openDiary('start');

  let auth = new Auth(type);

  return auth.login(id, password)
    .then(() => {
      return Diary._new(id, auth);
    })
    .then((diaryMgr) =>  {
      Dispatcher.openDiary('result', diaryMgr);
    })
    .catch((err) => {
      Logger.error(err);

      Dispatcher.openDiary('error', err);

      throw err;
    });
};



