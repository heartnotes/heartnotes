"use strict";

import fs from 'fs';
import ipc from 'ipc';
import Q from 'bluebird';



export default class ElectronDiskExport {

  constructor(logger) {
    this.logger = logger.create('electronDiskExport');
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


}


