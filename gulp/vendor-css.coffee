gulp = require 'gulp'
path = require 'path'
concat = require 'gulp-concat'


module.exports = (paths, options = {}) ->
  return ->
    gulp.src [
    ]
      .pipe concat('vendor.css')
      .pipe gulp.dest(paths.build.css)

