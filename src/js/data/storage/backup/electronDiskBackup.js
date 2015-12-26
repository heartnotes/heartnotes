"use strict";

import fs from 'fs';
import ipc from 'ipc';
import Q from 'bluebird';


const FILE_FILTERS = [
  { name: 'Heartnotes diary files', extensions: ['heartnotes'] }
];



export default class ElectronDiskBackup {

  constructor(logger) {
    this.logger = logger.create('electronDiskBackup');
  }


  newBackupFile () {
    this.logger.debug('choose backup file');

    return new Q((resolve, reject) => {
      let storagePath;

      try {
        storagePath = ipc.sendSync('synchronous-message', {
          title: 'Set backup file',
          action: 'saveFile',
          filters: FILE_FILTERS,
        });
      } catch (err) {
        this.logger.error(err);

        return reject(new Error('Save file dialog failed'));
      }

      if (!storagePath) {
        this.logger.debug('save file dialog cancelled');

        return resolve(null);
      } else {
        resolve(storagePath);
      }
    });
  }



  saveNewHtmlFile (content) {
    this.logger.debug('export to file', content.length);

    return new Q((resolve, reject) => {
      var storagePath;

      try {
        storagePath = ipc.sendSync('synchronous-message', {
          title: 'Export diary',
          action: 'saveFile',
          filters: [
            { name: 'HTML files', extensions: ['html'] }
          ],
        });
      } catch (err) {
        this.logger.error(err);

        return reject('Save file dialog failed');
      }

      if (!storagePath) {
        this.logger.debug('save file dialog cancelled');

        return resolve(null);
      }

      this.logger.info('file to create', storagePath);

      try {
        fs.writeFileSync(storagePath, content);

        resolve(storagePath);
      } catch (err) {
        this.logger.error(err);

        return reject('Unable to write HTML file.');
      }
    });
  }



  openDiaryBackup() {
    var file = ipc.sendSync('synchronous-message', {
      title: 'Open diary backup',
      action: 'openFile',
      filters: FILE_FILTERS,
    });

    if (Array.isArray(file)) {
      file = file[0];
    }

    return this._loadDiaryBackup(file);
  }



  _loadDiaryBackup (storagePath) {
    this.logger.debug('load diary backup', storagePath);

    return new Q((resolve, reject) => {
      var str;
    
      try {
        str = fs.readFileSync(storagePath).toString('utf-8');
      } catch (err) {
        this.logger.error(err);

        return reject(new Error('Unable to read from diary backup'));
      }

      try {
        resolve(JSON.parse(str));
      } catch (err) {
        this.logger.error(err);

        return reject(new Error('Diary backup data may be corrupt.'));
      }
    });
  }



  saveDiaryBackup (storagePath, data) {
    return new Q((resolve, reject) => {
      var str;
      try {
        str = JSON.stringify(data);
      } catch (err) {
        this.logger.error(err);

        return reject(new Error('Unable to format data to save to file.'));
      }

      try {
        fs.writeFileSync(storagePath, str);
      } catch (err) {
        this.logger.error(err);

        return reject(new Error('Unable to write file.'));
      }

      resolve();
    });
  }

}


