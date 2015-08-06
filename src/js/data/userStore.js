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
      nowCreatingDiary: false,
      nowOpeningDiary: false,
      nowDerivingKeys: false,
      nowChangingPassword: false,
    };

    // use this to keep track of instances where we ask to save entries 
    // multiple consecutive times - once one save is completed we check this 
    // value to see if another save should immediately begin.
    this._entrySaveData = {
      num: 0,
    };

    this.registerActionIds('user');
  }


  lastAccessedDiaryDetails () {
    return this.storage.getLastAccessedDiaryDetails();
  }


  createNewDataFile (params) {
    var self = this;

    self._resetState();

    var {password} = params;

    self.logger.info('create new datafile', password);

    self.setState({
      nowDerivingKeys: true,
      nowCreatingDiary: true,
    });

    self._deriveKeyFromNewPassword(password)
      .then(function derived(derivedKeyData) {
        return self.storage.createNewDiary({
          meta: derivedKeyData.meta
        })
          .then(function newFileCreated(fileName) {
            if (!fileName) {
              throw new Error('Please choose a location to save the file in');
            }

            self.setState({
              nowDerivingKeys: false,
              nowCreatingDiary: false,
              dataFileName: fileName,
              derivedKeys: derivedKeyData,
            });
          });
      })
      .catch(function(err) {
        self.logger.error('create new diary error', err);

        self.setStateAndChangeAfterDelay({
          nowDerivingKeys: false,
          nowCreatingDiary: false,
          createDataFileError: err
        }, {
          createDataFileError: null
        });
      });
  }



  chooseDataFile () {
    this.logger.info('choose datafile');

    this._resetState();

    this.storage.selectDiary()
      .then( (diaryName) => {
        if (!diaryName) {
          return;
        }

        return this.storage.loadMetaDataFromDiary(diaryName);
      })
      .then( (data) => {
        // all ok, let's force refresh
        this.forceUpdate();
      })
      .catch( (err) => {
        this.logger.error(err);

        this.setStateAndChangeAfterDelay({
          chooseDataFileError: err
        }, {
          chooseDataFileError: null
        });
      });
  }



  openDataFile (params) {
    var self = this;

    self._resetState();

    var {filePath, password} = params;

    self.logger.info('open datafile', filePath, password);

    self.setState({
      nowOpeningDiary: true,
    });

    self.storage.loadMetaDataFromDiary(filePath)
      .then(function gotMetaData(metaData) {
        if (!metaData) {
          return self.setState({
            openDataFileError: new Error('Data file not found: ' + filePath)
          });
        }

        self.setState({
          nowDerivingKeys: true
        });

        return self.crypto.deriveKey(password, {
          salt: metaData.salt,
          iterations: metaData.iterations,
        })
        .then(function gotKeyData(derivedKeyData) {
          self.logger.info('keys derived', derivedKeyData);

          // now test that keys are correct
          return self.crypto.decrypt(derivedKeyData.key1, metaData.keyTest)
            .then(function gotPlainData(plainData) {
              if (plainData !== derivedKeyData.key1) {
                throw new Error('Password incorrect');
              }

              self.setState({
                nowDerivingKeys: false,
                nowOpeningDiary: false,
                password: password,
                dataFileName: filePath,
                derivedKeys: derivedKeyData,
              });
            });
        });
      })
      .catch(function(err) {
        self.logger.error(err.stack);

        self.setStateAndChangeAfterDelay({
          nowDerivingKeys: false,
          nowOpeningDiary: false,
          openDataFileError: err
        }, {
          openDataFileError: null
        });
      });
  }


  closeDataFile () {
    this.setState({
      derivedKeys: null,
      dataFile: null,
      entriesLoaded: false,
    });
  }




  changePassword (params) {
    var self = this;

    self._resetState();

    var { oldPassword, newPassword } = params;

    self.logger.info('change password', oldPassword, newPassword);

    self.setState({
      nowDerivingKeys: true,
      nowChangingPassword: true,
    });

    Promise.resolve()
      .then(function checkOldPassword() {
        if (self.state.password !== oldPassword) {
          throw new Error('Your current password is wrong');
        }
      })
      .then(function updateMetaData() {
        return self._deriveKeyFromNewPassword(newPassword)
          .then(function derived(derivedKeyData) {
            return self.storage.saveMetaDataToDiary(
              this.state.dataFileName, derivedKeyData.meta
            )
              .then(function savedMeta() {
                return this._doSaveEntries(derivedKeyData.key1);
              })
              .then(function allDataUpdated() {
                self.setState({
                  password: newPassword,
                  nowDerivingKeys: false,
                  derivedKeys: derivedKeyData,
                });
              });
          });
      })
      .then(function allDone() {
        self.setState({
          nowChangingPassword: false
        });
      })      
      .catch(function(err){
        self.logger.error(err.stack);

        self.setStateAndChangeAfterDelay({
          nowDerivingKeys: false,
          nowChangingPassword: false,
          changePasswordError: err
        }, {
          changePasswordError: null
        });
      });
  }



  loadEntries () {
    var self = this;

    self._resetErrorStates();

    var dataFileName = self.state.dataFileName;

    if (!dataFileName) {
      return self.setState({
        loadEntriesError: new Error('No diary loaded')
      });
    }

    self.logger.info('load entries', dataFileName);

    self.setState({
      entriesLoaded: false
    });

    self.storage.loadEntriesFromDiary(dataFileName)
      .catch(function(err) {
        self.logger.error('load entries error', err);

        throw err;
      })
      .then( function gotEntries(encryptedEntries) {
        if (!encryptedEntries) {
          self.logger.info('no existing entries found');

          return {};
        } else {
          self.logger.info('decrypt entries', encryptedEntries.length);

          return self.crypto.decrypt(
            self.state.derivedKeys.key1, encryptedEntries
          )
            .catch(function(err) {
              self.logger.error('entry decryption error', err);

              throw err;
            });
        }
      })
      .then(function gotEntries(entries) {
        self.logger.debug('decrypted entries', _.keys(entries).length);

        self.setState({
          entriesLoaded: true,
        });

        self.flux.getStore('entries').setEntries(entries);
      })
      .catch(function(err) {
        self.setStateAndChangeAfterDelay({
          loadEntriesError: err,
          entriesLoaded: false,
        }, {
          loadEntriesError: null
        });
      });
  }



  saveEntries (entries) {
    this.logger.info('save entries', _.keys(entries).length);

    this._entrySaveData.num += 1;
    this._entrySaveData.entries = entries;

    if (!this.state.savingEntries) {
      this._doSaveEntries(this.state.derivedKeys.key1);
    }
  }




  _deriveKeyFromNewPassword (password) {
    var self = this;

    return self.crypto.deriveNewKey(password) 
      .then(function gotKeyData(derivedKeyData) {
        self.logger.info('keys derived', derivedKeyData);

        // encrypt key with itself to produce key checking value
        return self.crypto.encrypt(derivedKeyData.key1, derivedKeyData.key1)
          .then(function gotTestData(keyTest) {
            return _.extend({}, derivedKeyData, {
              meta: {
                keyTest: keyTest,
                salt: derivedKeyData.salt,
                iterations: derivedKeyData.iterations,
              }
            });
          });
      });
  }



  _doSaveEntries (encryptionKey) {
    var self = this;

    var { saveNum, entries } = self._entrySaveData;

    self.logger.debug('do save entries', saveNum, _.keys(entries).length);

    self.setState({
      savingEntries: true,
      saveEntriesError: null,
    });

    var dataFileName = self.state.dataFileName;

    if (!dataFileName) {
      let err = new Error('No diary to save to');

      self.setState({
        saveEntriesError: err
      });

      return Promise.reject(err);
    }

    self.logger.debug('encrypting entries', _.keys(entries).length);

    self.crypto.encrypt(encryptionKey, entries)
      .catch(function(err) {
        self.logger.error('entry encryption error', err);

        throw err;
      })
      .then(function encryptedEntries(saveData) {
        self.logger.debug('encypted entries', saveData.length + ' bytes');

        return self.storage.saveEntriesToDiary(dataFileName, saveData);
      })
      .then(function() {
        return self.storage.persist(self.state.dataFileName);
      })
      .then(function() {
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
        self.logger.error('entry save error', err);

        self.setStateAndChangeAfterDelay({
          savingEntries: false,
          saveEntriesError: err,
        }, {
          saveEntriesError: null
        });
      });
  }



  _resetState () {
    this.setState({
      derivedKeys: false,
      dataFile: null,
      entriesLoaded: false,
      nowDerivingKeys: false,
      nowOpeningDiary: false,
      nowCreatingDiary: false,
      nowChangingPassword: false,
    });

    this._resetErrorStates();
  }


  _resetErrorStates () {
    this.setState({
      createDataFileError: null,
      chooseDataFileError: null,
      openDataFileError: null,
      loadEntriesError: null,
      saveEntriesError: null,
      changePasswordError: null,
    });
  }
}


