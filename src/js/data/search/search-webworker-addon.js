import lunr from 'lunr';

import Logger from '../../utils/logger';



export default class SearchWorker {
  constructor(logger) {
    this.logger = Logger.create('search-worker');
    this.reset();
  }


  reset () {
    this.logger.debug('reset');

    this.lunr = lunr(function() {
      this.field('ts', { 
        boost: 10 
      });
      this.field('body');
      this.ref('id');
    });

    return Promise.resolve();
  }


  addMany (entries) {
    this.logger.debug('addMany', entries.length);

    entries.forEach((entry) => {
      this.lunr.remove(entry, false);
      this.lunr.add(entry, false);
    });

    return Promise.resolve();
  }



  add (entry) {
    this.logger.debug('add', entry.id);

    this.lunr.remove(entry, false);
    this.lunr.add(entry, false);

    return Promise.resolve();
  }



  remove (entry) {
    this.logger.debug('remove', entry.id);

    this.lunr.remove(entry, false);

    return Promise.resolve();
  }


}



self.searchWorker = new SearchWorker();

