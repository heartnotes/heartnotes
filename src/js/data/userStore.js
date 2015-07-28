"use strict";

var _ = require('lodash');

import { Timer } from 'clockmaker';

var Store = require('./store'),
  Crypto = require('./crypto/index');




export default class UserStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.crypto = new Crypto(flux, logger.create('Crypto'));

    this.state = {
      derivedKeys: null,
      entriesLoaded: false,
      nowDerivingKeys: false,
    };

    // use this to keep track of instances where we ask to save entries 
    // multiple consecutive times - once one save is completed we check this 
    // value to see if another save should immediately begin.
    this._entrySaveData = {
      num: 0,
    };

    this.registerActionIds('user');
  }


  lastDataFileName () {
    return this.storage.getLastAccessedDataFileName();
  }


  createNewDataFile (params) {
    var self = this;

    self._resetState();

    var {password} = params;

    self.logger.info('create new datafile', password);

    self.setState({
      nowDerivingKeys: true
    });

    self.crypto.deriveNewKey(password)
      .then(function gotKeyData(derivedKeyData) {
        self.logger.info('keys derived', derivedKeyData);

        // encrypt key with itself to produce key checking value
        return self.crypto.encrypt(derivedKeyData.key1, derivedKeyData.key1)
          .then(function gotTestData(keyTestData) {
            return self.storage.createNewFile({
              salt: derivedKeyData.salt,
              iterations: derivedKeyData.iterations,
              keyTest: keyTestData,
            })
              .then(function newFileCreated(filePath) {
                if (!filePath) {
                  throw new Error('Please choose a location to save the file in');
                }

                self.setState({
                  nowDerivingKeys: false,
                  dataFileName: filePath,
                  derivedKeys: derivedKeyData,
                });
              })
              .catch(function storageError(err) {
                self.logger.error('storage error', err);

                self.setState({
                  nowDerivingKeys: false,
                  createDataFileError: err
                });

                self.setStateAfterDelay({
                  createDataFileError: null
                }, 1000);
              });
          });
      })
      .catch(function(err) {
        self.logger.error('deriving new key error', err);

        self.setState({
          nowDerivingKeys: false,
          derivingKeysError: err
        });

        self.setStateAfterDelay({
          derivingKeysError: null
        }, 1000);
      });
  }


  openDataFile (params) {
    var self = this;

    self._resetState();

    var {filePath, password} = params;

    self.logger.info('open datafile', filePath, password);

    var dataFile = self.storage.loadFileMetadata(filePath);

    if (!dataFile) {
      return self.setState({
        openDataFileError: new Error('Data file not found: ' + filePath)
      });
    }

    self.setState({
      nowDerivingKeys: true
    });

    self.crypto.deriveKey(password, {
      salt: dataFile.salt,
      iterations: dataFile.iterations,
    })
      .then(function gotKeyData(derivedKeyData) {
        self.logger.info('keys derived', derivedKeyData);

        // now test that keys are correct
        return self.crypto.decrypt(derivedKeyData.key1, dataFile.keyTest)
          .then(function gotPlainData(plainData) {
            if (plainData !== derivedKeyData.key1) {
              throw new Error('Password incorrect');
            }

            self.setState({
              nowDerivingKeys: false,
              dataFile: dataFile,
              derivedKeys: derivedKeyData,
            });
          })
          .catch(function(err) {
            self.logger.error(err.stack);

            throw new Error('Password incorrect: ' + err);
          });
      })
      .catch(function(err) {
        self.logger.error('keys derivation error', err);

        self.setState({
          nowDerivingKeys: false,
          derivingKeysError: err
        });

        self.setStateAfterDelay({
          derivingKeysError: null
        }, 1000);
      });
  }


  closeDataFile () {
    this.setState({
      derivedKeys: null,
      dataFile: null,
      entriesLoaded: false,
    });
  }


  loadEntries () {
    var self = this;

    self._resetErrorStates();

    var dataFile = self.state.dataFile;

    if (!dataFile) {
      return self.setState({
        loadEntriesError: new Error('No datafile loaded')
      });
    }

    self.logger.info('load entries', dataFile.name);

    self.setState({
      entriesLoaded: false
    });

    var encryptedEntries = self.storage.loadFileData(dataFile.name);

    new Promise(function(resolve, reject) {
      if (!encryptedEntries) {
        self.logger.info('no existing entries found');

        resolve({});
      } else {
        self.logger.info('decrypt entries', encryptedEntries.length);

        return self.crypto.decrypt(self.state.derivedKeys.key1, encryptedEntries)
          .then(function decryptedEntries(entries) {
            self.logger.debug('decrypted entries', _.keys(entries).length);

            resolve(entries);
          })
          .catch(reject);
      }
    })
      .then(function gotEntries(entries) {
        self.setState({
          entriesLoaded: true,
        });

        self.flux.getStore('entries').setEntries(entries);
      })
      .catch(function(err) {
        self.logger.error('entry decryption error', err);

        self.setState({
          loadEntriesError: err
        });

        self.setStateAfterDelay({
          loadEntriesError: null
        }, 1000);
      });
  }



  saveEntries (entries) {
    this.logger.info('save entries', _.keys(entries).length);

    this._entrySaveData.num += 1;
    this._entrySaveData.entries = entries;

    if (!this.state.savingEntries) {
      this._doSaveEntries();
    }
  }



  _doSaveEntries () {
    var self = this;

    var entrySaveData = self._entrySaveData,
      saveNum = entrySaveData.num,
      entries = entrySaveData.entries;

    self.logger.debug('do save entries', saveNum, _.keys(entries).length);

    self.setState({
      savingEntries: true,
      saveEntriesError: null,
    });

    var dataFile = self.state.dataFile;

    if (!dataFile) {
      return self.setStatee({
        saveEntriesError: new Error('No datafile loaded')
      });
    }

    self.logger.debug('encrypting entries', _.keys(entries).length);

    self.crypto.encrypt(self.state.derivedKeys.key1, entries)
      .then(function encryptedEntries(saveData) {
        self.logger.debug('encypted entries', saveData.length + ' bytes');

        self.storage.saveFileData(dataFile.name, saveData);

        // restart the save?
        if (saveNum < self._entrySaveData.num) {
          self._doSaveEntries();
        } else {
          self.setState({
            savingEntries: false,
          });
        }
      })
      .catch(function(err) {
        self.logger.error('entry encryption error', err);
      });
  }



  _resetState () {
    this.setState({
      derivedKeys: false,
      dataFile: null,
      entriesLoaded: false,
      nowDerivingKeys: false,
    });

    this._resetErrorStates();
  }


  _resetErrorStates () {
    this.setState({
      derivingKeysError: null,
      createDataFileError: null,
      openDataFileError: null,
      loadEntriesError: null,
      saveEntriesError: null,
    });
  }
}


