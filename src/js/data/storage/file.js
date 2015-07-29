"use strict";

var fs = require('fs');

var ipc = require('ipc');



export default class ElectronAppFileStorage {

  constructor(logger) {
    this.logger = logger;

    this._cache = {};
  }

  type () {
    return 'file';
  }

  createNewDiary (data) {
    this.logger.debug('create new diary', data);

    return new Promise((resolve, reject) => {
      var filePath;

      try {
        filePath = ipc.sendSync('synchronous-message', 'saveNewFile');
      } catch (err) {
        this.logger.error(err);

        return reject('Save file dialog failed');
      }

      if (!filePath) {
        this.logger.debug('file dialog cancelled');

        return Promise.resolve(null);
      }

      this.logger.info('file to create', filePath);

      this._saveDiary(filePath, {
        meta: data
      })
        .then(function() {
          resolve(filePath);
        })
        .catch(reject);
    });
  }


  selectDiary() {
    var file = ipc.sendSync('synchronous-message', 'openFile');

    if (Array.isArray(file)) {
      file = file[0];
    }

    return Promise.resolve(file);
  }



  loadMetaDataFromDiary (diaryName) {
    this.logger.debug('load metadata', diaryName);

    return this._loadDiary(diaryName)
      .then( (fileData) => {
        return fileData.meta;
      });
  }



  loadEntriesFromDiary (diaryName) {
    this.logger.debug('load entries', diaryName);

    return this._loadDiary(diaryName)
      .then( (fileData) => {
        return fileData.entries;
      });
  }



  saveEntriesToDiary (diaryName, entryData) {
    this.logger.debug('save entries', diaryName, entryData.length + ' chars');

    return this._loadDiary(diaryName)
      .then( (fileData) => {
        fileData.entries = entryData;

        return this._saveDiary(diaryName, fileData);
      });
  }



  _loadDiary (filePath) {
    this.logger.debug('load file', filePath);

    return new Promise((resolve, reject) => {
      var str;
    
      if (this._cache[filePath]) {
        return resolve(this._cache[filePath]);
      }

      try {
        str = fs.readFileSync(filePath).toString('utf-8');
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to read from diary file');
      }

      try {
        this._cache[filePath] = JSON.parse(str);

        resolve(this._cache[filePath]);
      } catch (err) {
        this.logger.error(err);

        return reject('Diary file data may be corrupt.');
      }
    });
  }



  _saveDiary (filePath, json) {
    this.logger.debug('save file', filePath);

    return new Promise((resolve, reject) => {
      var str;
      try {
        str = JSON.stringify(json);
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to format data to save to file.');
      }

      try {
        fs.writeFileSync(filePath, str);
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to write file.');
      }

      // overwrite cached data
      this._cache[filePath] = json;

      resolve();
    });
  }

}


