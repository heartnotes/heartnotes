"use strict";

var fs = require('fs');

var ipc = require('ipc');



export default class ElectronAppFileStorage {

  constructor(logger) {
    this.logger = logger;
  }

  type () {
    return 'file';
  }


  exportToFile (content) {
    this.logger.debug('export to file', content.length);

    return new Promise((resolve, reject) => {
      var filePath;

      try {
        filePath = ipc.sendSync('synchronous-message', 'saveNewExportFile');
      } catch (err) {
        this.logger.error(err);

        return reject('Save file dialog failed');
      }

      if (!filePath) {
        this.logger.debug('file dialog cancelled');

        return resolve(null);
      }

      this.logger.info('file to create', filePath);

      try {
        fs.writeFileSync(filePath, content);

        resolve(filePath);
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to write HTML file.');
      }
    });
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

        return resolve(null);
      }

      this.logger.info('file to create', filePath);

      this.saveDiary(filePath, data)
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



  loadDiary (filePath) {
    this.logger.debug('load diary', filePath);

    return new Promise((resolve, reject) => {
      var str;
    
      try {
        str = fs.readFileSync(filePath).toString('utf-8');
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to read from diary file');
      }

      try {
        resolve(JSON.parse(str));
      } catch (err) {
        this.logger.error(err);

        return reject('Diary file data may be corrupt.');
      }
    });
  }



  saveDiary (filePath, data) {
    return new Promise((resolve, reject) => {
      var str;
      try {
        str = JSON.stringify(data);
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

      resolve();
    });
  }

}


