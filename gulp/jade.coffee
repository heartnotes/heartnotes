jade = require 'gulp-jade'

gulp = require 'gulp'
gutil = require 'gulp-util'
gulpIf = require 'gulp-if'


module.exports = (paths, options = {}) ->
  return -> 
    gulp.src paths.files.jade
      .pipe jade(
        pretty: !!options.debugBuild
      )
      .pipe gulp.dest(paths.build.html)
