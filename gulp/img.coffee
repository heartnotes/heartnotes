gulp = require 'gulp'

module.exports = (paths, options = {}) ->
  return ->
    gulp.src [
      paths.files.img
    ]
      .pipe gulp.dest(paths.build.img)

