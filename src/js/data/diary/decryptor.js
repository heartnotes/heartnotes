import _ from 'lodash';
import Q from 'bluebird';

import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';


export default class Decrypter {
  constructor (logger, auth) {
    this.logger = logger.create('decryptor');
    this._auth = auth;
  }


  decrypt (encryptedEntries) {
    if (!this._auth.credentials.version) {
      return this._decryptOldFormat(encryptedEntries);
    } else {
      return this._decryptNewFormat(encryptedEntries);
    }
  }


  _decryptOldFormat (encryptedEntries) {
    this.logger.debug("decrypt OLD format");

    Dispatcher.decryptEntries('start');

    Dispatcher.decryptEntries('progress', 'Decrypting entries');

    var entries = {};

    return Crypto.decrypt(
      this._auth.encryptionKey, encryptedEntries
    )
      .then((entries) => {
        entries = entries;

        let done = 0,
          total = _.keys(entries).length;

        // now let's re-encrypt each entry
        return Q.props(_.mapValues(entries, (entry) => {
          return Crypto.encrypt(this._auth.encryptionKey, {
            body: entry.body,
            ts: entry.ts,
            up: entry.up,
          })
            .then((encryptedEntry) => {
              Dispatcher.decryptEntries('progress', `Upgrading diary...(${++done}/${total})`);

              return encryptedEntry;
            });
        }));
      })
      .then((newlyEncryptedEntries) => {
        Dispatcher.decryptEntries('result');

        return {
          encryptedEntries: newlyEncryptedEntries,
          entries: entries,
        };
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.decryptEntries('error', err);

        throw err;
      });
  }


  _decryptNewFormat (encryptedEntries) {
    this.logger.debug("decrypt NEW format");

    Dispatcher.decryptEntries('start');

    Dispatcher.decryptEntries('progress', 'Decrypting entries');

    var entries = {};

    let total = _.keys(encryptedEntries).length;
    let done = 0;

    return _.reduce(encryptedEntries, (prevPromise, entryEnc, id) => {
      return prevPromise.then(() => {
        return Crypto.decrypt(this._auth.encryptionKey, entryEnc)
          .then((entry) => {
            entry.id = id;
            entries[id] = entry;

            Dispatcher.decryptEntries('progress', `Decrypting...(${++done}/${total})`);
          });
      });
    }, Q.resolve())
      .then((entries) => {
        return {
          encryptedEntries: encryptedEntries,
          entries: entries,
        };
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.decryptEntries('error', new Error('There was an error decrypting diary entries.'));

        throw err;
      }); 
  }

}




