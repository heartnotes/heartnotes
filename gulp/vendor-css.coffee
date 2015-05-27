gulp = require 'gulp'
path = require 'path'
concat = require 'gulp-concat'


module.exports = (paths, options = {}) ->
  return ->
    gulp.src [
      "#{paths.npm}/pickadate/lib/themes/default.css"
      "#{paths.npm}/pickadate/lib/themes/default.date.css"
    ]
      .pipe concat('vendor.css')
      .pipe gulp.dest(paths.build.css)

