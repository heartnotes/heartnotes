// if running in electron then pull in the stuff we need for our app
if ('undefined' !== typeof process && 'undefined' !== typeof 'require') {
  window.ipc = require('ipc');
  window.fs = require('fs');
  window.shell = require('shell');
}
