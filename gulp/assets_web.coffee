runSeq = require('run-sequence')

module.exports = (paths, options = {})->
  return (cb) ->
    runSeq 'assets', 'compress-build', cb
