import _ from 'lodash';
import Logger from '../../utils/logger';
import WebWorker from '../../utils/webWorker';
import moment from 'moment';
import { htmlToStr } from '../../utils/format';



export class SearchIndex {
  constructor(logger) {
    this.logger = Logger.create('search-index');

    this.worker = new WebWorker(function(action, cb) {

      self.searchWorker[action.method]
        .apply(self.searchWorker, action.params || [])
        .then(function(result) { 
          cb(null, result); 
        })
        .catch(cb);

    }, this.logger.create('worker'), [
      'worker-search.js',
    ]);
  }


  reset () {
    this.logger.debug('reset');

    return this.worker.run({
      method: 'reset'
    });
  }



  addMany (entries) {
    this.logger.debug('addMany', Object.keys(entries).length);

    let preparedEntries = _.map(entries, (e) => {
      return this._prepareEntry(e);
    });

    return this.worker.run({
      method: 'addMany',
      params: [preparedEntries],
    });
  }



  add (entry) {
    this.logger.debug('add', entry.id);

    return this.worker.run({
      method: 'add',
      params: [this._prepareEntry(entry)],
    });
  }



  remove (entry) {
    this.logger.debug('remove', entry.id);

    return this.worker.run({
      method: 'remove',
      params: [{
        id: entry.id
      }],
    });
  }


  search (keyword) {
    this.logger.debug('search', keyword);

    return this.worker.run({
      method: 'search',
      params: [keyword],
    });
  }



  _prepareEntry (entry) {
    console.log(htmlToStr(entry.body));

    return {
      id: entry.id,
      ts: moment( entry.ts ).format('MMMM Do YYYY'),
      body: htmlToStr(entry.body),
    };
  }

}




exports.instance = new SearchIndex();
