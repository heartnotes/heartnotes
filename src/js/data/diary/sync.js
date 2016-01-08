import _ from 'lodash';
import Q from 'bluebird';
import moment from 'moment';
import { Timer } from 'clockmaker';

import * as Detect from '../../utils/detect';
import { instance as Dispatcher } from '../dispatcher';
import { UnreachableError, instance as Api } from '../api/index';


export default class Sync {
  constructor (diary, options = {}) {
    this.logger = diary.logger.create('sync');
    this.diary = diary;

    _.defaults(options, {
      delayMs: 15000
    });

    this._timer = Timer(this._onTick, options.delayMs, {
      async: true,
      repeat: true,
      thisObj: this,
      onError: this._onError.bind(this),
    });
  }


  start () {
    this._timer.start();
  }


  _onError (err) {
    this.logger.error(err);
  }


  _onTick (timer, cb) {
    if (!this.diary._auth.authenticatedWithServer) {
      this.logger.info('Not logged-in. Skipping.')

      return cb();
    }

    Dispatcher.sync('start');

    this.logger.info('Started');

    const syncStartTime = Date.now();

    // last sync time
    let lastSyncTime = _.get(this.diary._settings, 'lastSyncTime', 0);

    this.logger.debug('Last timestamp: ' + moment(lastSyncTime).toString());

    let entriesToSend = {};

    let entryUpdateTs = _.each(this.diary._entries, (e, id) => {
      if (e.up > lastSyncTime) {
        entriesToSend[id] = this.diary._encryptedEntries[id];
      }
    });

    this.logger.debug('Contacting server...');

    Api.isServerReachable()
      .then(() => {
        Dispatcher.sync('progress', 'Sending data...');

        return Api.post('sync', {}, {
          entries: entriesToSend,
        })        
      })
      .then((serverEncryptedEntries) => {
        this.logger.debug('Got data...');

        Dispatcher.sync('progress', 'Receiving data...');

        if (!_.isEmpty(serverEncryptedEntries)) {
          return this.diary.decryptor.decrypt(serverEncryptedEntries)
            .then((serverDecryptedEntries) => {
              _.each(serverDecryptedEntries, (e, id) => {
                this.diary._entries[id] = e;
                this.diary._encryptedEntries[id] = serverEncryptedEntries[id];
              });
            });
        }
      })
      .then(() => {
        Dispatcher.sync('progress', 'Saving data...');

        this.logger.debug('Saving entries locally...');

        return this.diary._saveEncryptedEntries();
      })
      .then(() => {
        this.logger.debug('Updating timestamp...');

        this.diary._settings.lastSyncTime = Date.now();

        return this.diary._saveSettings();
      })
      .then(() => {
        const syncTimeTaken = (Date.now() - syncStartTime) / 1000.0;

        this.logger.info(`Ended (took ${syncTimeTaken} seconds`);

        Dispatcher.sync('stop');
      })
      .catch((err) => {
        if (err instanceof UnreachableError) {
          this.logger.warn('Server unreachable, skipping');

          // /* if in dev mode then let's not always fail */
          // if (Detect.inDevMode()) {
          //   if (0.5 > Math.random()) {
          //     return;
          //   }
          // }

          Dispatcher.sync('error', 'Server unreachable, network connection may be down.');
        } else {
          this.logger.error(err.stack);
          
          // perhaps membership requires renewal, in which case 
          // let's update the account data
          if (_.get(err.details.accountData)) {
            this.diary.auth.updateAccountData(err.details.accountData);
          }
        }
      })
      .finally(() => {
        cb();
      });
  }

}




