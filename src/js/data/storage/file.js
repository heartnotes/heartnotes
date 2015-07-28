"use strict";

var fs = require('fs');




export default class ElectronAppFileStorage {

  constructor(logger) {
    this.logger = logger;

    this._cache = {};
  }


  createNewFile (data) {
    this.logger.debug('create new diary', data);

    return new Promise((resolve, reject) => {
      var file;

      try {
        file = ipc.sendSync('synchronous-message', 'saveNewFile');
      } catch (err) {
        this.logger.error(err);

        return reject('Save file dialog failed');
      }

      if (!file) {
        this.logger.debug('file dialog cancelled');

        return Promise.resolve(null);
      }

      this.logger.info('file to create', file);

      this._saveFile(diaryName, {
        meta: data
      })
        .then(function() {
          resolve(file);
        })
        .catch(reject);
    });
  }


  loadEntriesFromDiary (diaryName) {
    this.logger.debug('load entries', diaryName);

    return this._loadFile(diaryName)
      .then( (fileData) => {
        return fileData.entries;
      });
  }



  saveEntriesToDiary (diaryName, entryData) {
    this.logger.debug('save entries', diaryName, entryData.length + ' chars');

    return this._loadFile(diaryName)
      .then( (fileData) => {
        fileData.entries = entryData;

        return this._saveFile(diaryName, fileData);
      });
  }



  _loadFile (diaryName) {
    this.logger.debug('load file', diaryName);

    return new Promise((resolve, reject) => {
      var str;
    
      if (this._cache[diaryName]) {
        return resolve(this._cache[diaryName]);
      }

      try {
        str = fs.readFileSync(diaryName).toString('utf-8');
      } catch (err) {
        return reject('Unable to read from diary file');
      }

      try {
        this._cache[diaryName] = JSON.parse(str);

        resolve(this._cache[diaryName]);
      } catch (err) {
        return reject('Diary file data may be corrupt.');
      }
    });
  }



  _saveFile (diaryName, json) {
    this.logger.debug('save file', diaryName);

    return new Promise((resolve, reject) => {
      var str;
      try {
        str = JSON.stringify(json);
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to format data to save to file.');
      }

      try {
        fs.writeFileSync(diaryName, str);
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to write file.');
      }

      // overwrite cached data
      this._cache[diaryName] = json;

      resolve();
    });
  }

}


