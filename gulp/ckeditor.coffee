gulp = require 'gulp'
gulpIf = require 'gulp-if'
path = require 'path'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'


module.exports = (paths, options = {}) ->
  return ->
    v1 = gulp.src [
      "#{paths.src.ckeditor}/**/*"
      "!#{paths.src.ckeditor}/samples/**"
      "!#{paths.src.ckeditor}/**/*.md"
      "!#{paths.src.ckeditor}/**/LICENSE"
    ]
      .pipe gulp.dest(paths.build.ckeditor)

