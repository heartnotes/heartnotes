runSeq = require('run-sequence')


module.exports = (paths, options = {}) ->
  (cb) ->
    runSeq ['dev-assets', 'dev-server', 'dev-electron'], cb

