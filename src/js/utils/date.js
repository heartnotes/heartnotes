import moment from 'moment';

export function getNormalizedTimestamp (ts) {
  // every minute is a new timestamp - so basically you can quickly do multiple successive entries
  return moment(ts).startOf('minute').valueOf();
}

