"use strict";

var _ = require('lodash');

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

    this.registerActionIds('user');
  }


  lastDataFile () {
    return this.storage.lastDataFile();
  }


  saveNewDataFile (params) {
    var self = this;

    self._resetState();

    var {filePath, password} = params;

    self.logger.info('save new datafile', filePath, password);

    self.setState({
      nowDerivingKeys: true
    });

    self.crypto.deriveNewKey(password)
      .then(function gotKeyData(derivedKeyData) {
        self.logger.info('keys derived', derivedKeyData);

        // encrypt key with itself to produce key checking value
        return self.crypto.encrypt(derivedKeyData.key1, derivedKeyData.key1)
          .then(function gotTestData(keyTestData) {
            var savedKeyData = self.storage.saveDataFile(filePath, {
              salt: derivedKeyData.salt,
              iterations: derivedKeyData.iterations,
              keyTest: keyTestData,
            });

            self.setState({
              nowDerivingKeys: false,
              dataFile: savedKeyData,
              derivedKeys: derivedKeyData,
            });
          });
      })
      .catch(function(err) {
        self.logger.error('keys derivation error', err);

        self.setState({
          derivingKeysError: err
        });
      });
  }


  openDataFile (params) {
    var self = this;

    self._resetState();

    var {filePath, password} = params;

    self.logger.info('open datafile', filePath, password);

    var dataFile = self.storage.loadDataFile(filePath);

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
          derivingKeysError: err
        });
      });
  }


  loadEntries () {
    var self = this;

    self._resetErrorStates();

    var dataFile = self.state.dataFile;

    if (!dataFile) {
      return self.setStatee({
        loadEntriesError: new Error('No datafile loaded')
      });
    }

    self.logger.info('load entries', dataFile.name);

    self.setState({
      entriesLoaded: false
    });

    var encryptedEntries = self.storage.loadEntries(dataFile.name);

    new Promise(function(resolve, reject) {
      if (!encryptedEntries) {
        self.logger.info('no existing entries found');

        resolve([]);
      } else {
        self.logger.info('decrypt entries', encryptedEntries.length);

        return self.crypto.decrypt(self.state.derivedKeys.key1, encryptedEntries)
          .then(function decryptedEntries(entries) {
            self.logger.debug('decrypted entries', entries.length);

            resolve(entries)
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
      openDataFileError: null,
      loadEntriesError: null,
    });
  }
}


