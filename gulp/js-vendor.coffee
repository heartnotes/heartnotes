gulp = require 'gulp'
gulpIf = require 'gulp-if'
path = require 'path'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'


module.exports = (paths, options = {}) ->
  return ->
    v1 = gulp.src [
      "#{paths.npm}/jquery/dist/jquery.js"
      "#{paths.npm}/pickadate/lib/picker.date.js"
    ]
      .pipe concat('vendor.js')
      .pipe gulpIf(!options.debugBuild, uglify())
      .pipe gulp.dest(paths.build.js)

