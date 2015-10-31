import Logger from 'logarama';

var logger = module.exports = new Logger(null, {
  minLevel: 'debug'
});

// guarded setting (we might be inside a webworker)
if (typeof window !== 'undefined') {
  window.rootLogger = logger;
}

