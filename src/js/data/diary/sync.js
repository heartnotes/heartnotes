import _ from 'lodash';
import Q from 'bluebird';
import moment from 'moment';

import * as Detect from '../../utils/detect';
import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';
import { UnreachableError, instance as Api } from '../api/index';


export default class Sync {
  constructor (diary, options = {}) {
    this.logger = diary.logger.create('sync');
    this.diary = diary;
    this._delay = options.delayMs || 10000;
    this._onTick = _.bind(this._onTick, this);
    this._started = false;
  }


  start () {
    this._started = true;
    this._onTick();
  }

  stop () {
    this._started = false;
    window.clearTimeout(this._tickTimeout);
  }


  _setupNextTick () {
    this._tickTimeout = window.setTimeout(this._onTick, this._delay);
  }

  _onTick () {
    try {
      if (!this._started) {
        this.logger.info('Sync stopped. Skipping.')        
        return;
      }

      if (!this.diary.auth.authenticatedWithServer) {
        this.logger.info('Not logged-in. Skipping.')

        return this._setupNextTick();
      }

      Dispatcher.sync('start');

      this.logger.info('Started');

      const syncStartTime = Date.now();

      /*
      Last sync time:
       */
      const lastSyncTime = parseInt(
        _.get(this.diary._settings, 'lastSyncTime', 0)
      );

      const thisSyncTime = moment().valueOf();

      this.logger.debug('Last timestamp: ' + moment(lastSyncTime).toString());

      let entriesToSend = {};

      Dispatcher.sync('progress', 'Encrypting data to send...');

      console.log(this.diary.filteredEntries);
      _.reduce(this.diary.filteredEntries, (p, e, id) => {
        return p.then(() => {
          if (e.lastUpdated > lastSyncTime) {
            return Crypto.encrypt(this.diary.auth.encryptionKey, e)
              .then((enc) => {
                entriesToSend[id] = {
                  lastUpdated: e.lastUpdated,
                  data: enc,                
                };
              });
          }
        });
      }, Q.resolve())
        .then(() => {
          Dispatcher.sync('progress', 'Sending data...');

          return Api.post('sync', {}, {
            lastSyncTime: lastSyncTime,
            entries: entriesToSend,
          });           
        })
        .then((res) => {
          let serverEncryptedEntries = _.get(res, 'entries', {});

          this.logger.debug('Got data...');

          Dispatcher.sync('progress', 'Receiving data...');

          let numEntriesUpdated = 0;

          if (!_.isEmpty(serverEncryptedEntries)) {
            return _.reduce(serverEncryptedEntries, (p, e, id) => {
              let { data, lastUpdated } = e; 

              return p.then(() => {
                // only decrypt and overwrite if newer than local version of the entry
                if (_.get(this.diary.filteredEntries, `${id}.lastUpdated`, 0) < lastUpdated) {
                  return Crypto.decrypt(this.diary.auth.encryptionKey, data)
                    .then((decEntry) => {
                      numEntriesUpdated++;

                      decEntry.id = id;

                      this.diary._setEntry(id, decEntry);
                    });
                }                
              });
            }, Q.resolve())
              .then(() => {
                return numEntriesUpdated;
              });
          }
        })
        .then((numEntriesUpdated) => {
          if (numEntriesUpdated) {
            Dispatcher.sync('progress', 'Saving new data...');

            this.logger.debug('Saving locally...');

            return Q.all([
              this.diary._saveEntriesToStorage(this.diary.filteredEntries),
              this.diary._rebuildSearchIndex(),
            ]);
          }
        })
        .then(() => {
          const syncTimeTaken = (Date.now() - syncStartTime) / 1000.0;

          this.logger.info(`Ended (took ${syncTimeTaken} seconds`);

          Dispatcher.sync('stop');
        })
        .then(() => {
          this.logger.debug('Updating timestamp...');

          this.diary._settings.lastSyncTime = thisSyncTime;

          return this.diary._saveSettings();
        })
        .catch((err) => {
          this.logger.error(err.stack);

          // perhaps membership requires renewal, in which case 
          // let's update the account data
          if (_.get(err, 'details.accountData')) {
            this.diary.auth.updateAccountData(err.details.accountData);
          } else {
            // network down
            if (0 === err.statusCode) {
              Dispatcher.sync('error', 'Sync error, network connection may be down.');
            }
            // logged-out
            else if (403 === err.statusCode 
              && 0 <= err.message.toLowerCase().indexOf('please login')) 
            {
              return this.diary.close();
            }
          }
        })
        .finally(() => {
          this._setupNextTick();
        });
    } catch (err) {
      this.logger.error(err);
    }
  }

}




