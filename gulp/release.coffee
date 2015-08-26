runSeq = require('run-sequence')


module.exports = (paths, options = {}) ->
  (cb) ->
    runSeq 'assets', 'electron-build', cb
