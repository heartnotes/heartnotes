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
import Auth from '../auth/index';
import ExportedEntries from '../../ui/components/ExportedEntries';
import * as DateUtils from '../../utils/date';
import Decryptor from './decryptor';



/**
 * Represents a diary.
 */
export default class Diary {

  constructor(id, auth) {
    this._id = id;
    this._auth = auth;

    this._encryptedEntries = {};
    this._entries = {};

    this._backupFilePath = null;
    this._lastBackupTime = null;

    this.logger = Logger.create(`diary[${this._id}]`);

    this.decryptor = new Decryptor(this.logger, auth);
  }



  loadEntries() {
    Dispatcher.loadEntries('start');

    this._entries = {};

    return this._loadEncryptedEntries()
      .then((encryptedEntries) => {
        this._encryptedEntries = encryptedEntries || {};

        return this.decryptor.decrypt(this._encryptedEntries);
      })
      .then((result) => {
        this.logger.debug('loaded entries');
        this.logger.debug(result);

        this._encryptedEntries = result.encryptedEntries;
        this._entries = result.entries;

        return this._saveEncryptedEntries();
      })
      .then(() => {
        Dispatcher.loadEntries('result');

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
    if (!entry) {
      entry = this.getEntryByDate(ts);
    }

    return Q.try(() => {
      if (!entry) {
        ts = DateUtils.getNormalizedTimestamp(ts || Date.now());

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



  get id () {
    return this._id;
  }


  get entries () {
    return this._entries;
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


  getEntryForNow () {
    this.logger.debug('get today\'s entry');
    
    return this.getEntryByDate(new Date());
  }


  _loadEncryptedEntries () {
    return Q.resolve(Storage.local.loadEntries(this._id) || {});
  }


  _saveEncryptedEntries () {
    return Q.resolve(Storage.local.saveEntries(this._id, this._encryptedEntries));
  }


  _loadBackupSettings () {
    let settings = Storage.local.loadSettings(this._id);

    return Q.resolve( _.get(settings, 'backup', {}));
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

}


Diary.createNew = function(id, password) {
  let auth = new Auth();

  return auth.signUp(id, password)
    .then(() => {
      return new Diary(id, auth);
    });
};


Diary.open = function(id, password) {
  let auth = new Auth();

  return auth.login(id, password)
    .then(() => {
      return new Diary(id, auth);
    });
};




