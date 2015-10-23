import Logger from '../utils/logger';


export default class Methods {
  constructor (state) {
    this.state = state;
    this.logger = Logger.create('methods');
  }

  function getEntry (id) {
    this.logger.debug('get entry by id', id);

    return (this.state.diary.entries || {})[id];
  }


  function getEntryByDate (date) {
    var ts = moment(date).startOf('day').valueOf();

    this.logger.debug('get entry by date', date, ts);

    var entry = _.find(this.state.diary.entries || {}, function(e) {
      return e.ts === ts;
    });

    this.logger.debug('got by date', ts, entry ? entry.id : null);

    return entry;
  }


  getTodayEntry () {
    this.logger.debug('get today\'s entry');

    return this.getEntryByDate(new Date());
  }
}
