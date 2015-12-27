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


  selectNewBackupFile () {
    this.logger.debug('choose backup file');

    return new Q((resolve, reject) => {
      let storagePath;

      try {
        storagePath = ipc.sendSync('synchronous-message', {
          title: 'Save new backup',
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



  saveBackup (storagePath, data) {
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


