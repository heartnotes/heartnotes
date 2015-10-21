import Logger from 'logarama';

var logger = module.exports = new Logger(null, {
  minLevel: 'debug'
});

window.rootLogger = logger;

