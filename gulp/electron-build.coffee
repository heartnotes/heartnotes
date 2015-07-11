path = require 'path'
gulp = require 'gulp'
del = require 'del'
mergeStream = require 'merge-stream'


module.exports = (paths, options = {}) ->
  return {
    deps: ['assets']
    task: ->
      del.sync [ paths.build.electron ]

      s1 = gulp.src [
        path.join(paths.build.root, '**', '**', '**', '**', '**', '**', '*')
      ]
        .pipe gulp.dest(path.join(paths.build.electron, 'browser'))

      s2 = gulp.src [
        path.join(paths.src.lib, 'electron', '*')
        path.join(paths.root, 'package.json')
      ]
        .pipe gulp.dest(path.join(paths.build.electron))

      mergeStream(s1, s2)
  }

