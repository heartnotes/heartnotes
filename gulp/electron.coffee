path = require 'path'
gulp = require 'gulp'


module.exports = (paths, options = {}) ->
  return {
    deps: []
    task: ->
      gulp.src [
        path.join(paths.build.html, '**', '**', '**', '**', '**', '**', '*')
      ]
        .pipe gulp.dest(paths.electron.build)
  }

