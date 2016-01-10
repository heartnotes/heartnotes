import Logger from 'logarama';
import Detect from './detect';

var logger = module.exports = new Logger(null, {
  minLevel: Detect.inDevMode() ? 'debug' : 'info'
});

// guarded setting (we might be inside a webworker)
if (typeof window !== 'undefined') {
  window.rootLogger = logger;
}

