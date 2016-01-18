jade = require 'gulp-jade'
replace = require 'gulp-replace'
gulp = require 'gulp'
gutil = require 'gulp-util'
gulpIf = require 'gulp-if'


module.exports = (paths, options = {}) ->
  return -> 
    gulp.src paths.files.jade
      .pipe replace('__BUILD_TYPE__', options.buildType)
      .pipe jade(
        pretty: !options.minifiedBuild
      )
      .pipe gulp.dest(paths.build.html)
