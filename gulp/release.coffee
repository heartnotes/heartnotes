runSeq = require('run-sequence')


module.exports = (paths, options = {}) ->
  (cb) ->
    options.minifiedBuild = true
    
    runSeq 'assets', 'electron-build', cb
