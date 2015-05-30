runSeq = require('run-sequence')

module.exports = (paths, options = {}) ->
  return (cb) ->
    runSeq 'ckeditor-core', 'ckeditor-contents-stylus', cb
