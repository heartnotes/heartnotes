import Logger from 'logarama';

var logger = module.exports = new Logger(null, {
  minLevel: 'info'
});

window.rootLogger = logger;

