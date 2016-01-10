import _ from 'lodash';
import Q from 'bluebird';

import { instance as Crypto } from '../crypto/index';
import { instance as Dispatcher } from '../dispatcher';
import * as StringUtils from '../../utils/string';


export default class Decrypter {
  constructor (logger, auth) {
    this.logger = logger.create('decryptor');
    this._auth = auth;
  }


  decryptEntriesLoadedFromStorage (encryptedEntries, options = {}) {
    if (!this._auth.originalMeta.version) {
      return this._decryptOldFormat(encryptedEntries, options);
    } else {
      return this._decryptNewFormat(encryptedEntries, options);        
    }
  }


  decrypt (encryptedEntries, options) {
    _.defaults(options, {
      onEach: function() {}
    });

    var entries = {};

    return _.reduce(encryptedEntries, (prevPromise, entryEnc, id) => {
      return prevPromise.then(() => {
        return Crypto.decrypt(this._auth.encryptionKey, entryEnc)
          .then((entry) => {
            entry.id = id;
            entries[id] = entry;

            return entry;
          })
          .then(options.onEach);
      });
    }, Q.resolve())
      .then(() => {
        return entries;
      });
  }


  encrypt (entries, options = {}) {
    _.defaults(options, {
      auth: this._auth,
      onEach: (encryptedEntry => encryptedEntry),
      setUpdatedTo: null,
    });

    return Q.props(_.mapValues(entries, (entry) => {
      entry.up = options.setUpdatedTo || entry.up;

      return Crypto.encrypt(options.auth.encryptionKey, {
        body: entry.body,
        ts: entry.ts,
        up: entry.up,
      })
        .then(options.onEach);
    }));
  }


  _decryptOldFormat (encryptedEntries, options = {}) {
    this.logger.debug("decrypt OLD format");

    Dispatcher.decryptEntries('start');

    Dispatcher.decryptEntries('progress', 'Decrypting entries');

    return Crypto.decrypt(
      this._auth.encryptionKey, encryptedEntries
    )
      .then((entries) => {
        let done = 0,
          total = _.keys(entries).length;

        let finalEntries = {};

        _.each(entries, (e) => {
          e.id = StringUtils.generateEntryId(e.ts);

          finalEntries[e.id] = e;
        });

        let encryptOptions = _.extend({
          onEach: (encryptedEntry) => {
            Dispatcher.decryptEntries('progress', `Upgrading entry...(${++done}/${total})`);

            return encryptedEntry; 
          }
        }, options.reEncryptOptions);

        return this.encrypt(finalEntries, encryptOptions)
          .then((newlyEncryptedEntries) => {
            Dispatcher.decryptEntries('result');

            return {
              encryptedEntries: newlyEncryptedEntries,
              entries: finalEntries,
            };
          });
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.decryptEntries('error', err);

        throw err;
      });
  }


  _decryptNewFormat (encryptedEntries, options = {}) {
    this.logger.debug("decrypt NEW format");

    Dispatcher.decryptEntries('start');

    Dispatcher.decryptEntries('progress', 'Decrypting entries');

    let total = _.keys(encryptedEntries).length;
    let done = 0;

    return this.decrypt(encryptedEntries, {
      onEach: (entry) => {
        Dispatcher.decryptEntries('progress', `Decrypting...(${++done}/${total})`);
      }
    })
      .then((entries) => {
        if (options.shouldReEncrypt) {
          return this.encrypt(entries, encryptOptions)
            .then((finalEncryptedEntries) => {
              return {
                encryptedEntries: finalEncryptedEntries,
                entries: entries,
              }
            });
        } else {
          return {
            encryptedEntries: encryptedEntries,
            entries: entries,
          };
        }
      })
      .catch((err) => {
        this.logger.error(err);

        Dispatcher.decryptEntries('error', new Error('There was an error decrypting diary entries.'));

        throw err;
      }); 
  }

}




