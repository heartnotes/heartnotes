runSeq = require('run-sequence')


module.exports = (paths, options = {}) ->
  (cb) ->
    options.buildType = 'PRODUCTION'
    runSeq 'assets', 'electron-build', cb
