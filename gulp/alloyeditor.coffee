gulp = require 'gulp'
gulpIf = require 'gulp-if'
path = require 'path'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'


module.exports = (paths, options = {}) ->
  return ->
    v1 = gulp.src [
      "#{paths.npm}/alloyeditor/dist/alloy-editor/**/*"
    ]
      .pipe gulp.dest(paths.build.alloyeditor)

