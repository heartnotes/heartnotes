gulp = require 'gulp'
path = require 'path'

module.exports = (paths, options = {}) ->
  return ->
    gulp.src [
      "#{paths.npm}/font-awesome-stylus/fonts/*.*"
      "#{paths.src.fonts}/**/*.*"
    ]
      .pipe gulp.dest(paths.build.fonts)

