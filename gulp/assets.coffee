runSeq = require('run-sequence')
del = require 'del'

module.exports = (paths, options = {})->
  return (cb) ->
    del.sync [ paths.build.root ]

    runSeq ['ckeditor', 'jade', 'stylus', 'img', 'js', 'fonts'], cb
