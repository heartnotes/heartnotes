"use strict";

import _ from 'lodash';
import moment from 'moment';

import Logger from '../../utils/logger';
import BrowserStorage from './local/browserStorage';
import ElectronDiskStorage from './backup/electronDiskBackup';
import ElectronExporter from './export/electronDiskExport';
import Detect from '../../utils/detect';
import Diary from '../diary/index';


const LAST_ACCESSED_DIARY_KEY = 'last_accessed';



export class StorageManager {

  constructor() {
    this.logger = Logger.create('storage');

    this._localStorage = new BrowserStorage(this.logger);

    if (Detect.isElectronApp()) {
      this._backupStorage = new ElectronDiskStorage(this.logger);
      this._exporter = new ElectronExporter(this.logger);
    }
  }


  get local () {
    return this._localStorage;
  }


  get backup () {
    return this._backupStorage;
  }


  get export () {
    return this._exporter;
  }

}



exports.instance = new StorageManager();




