gulp = require 'gulp'
gulpIf = require 'gulp-if'
replace = require 'gulp-replace'
path = require 'path'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'


module.exports = (paths, options = {}) ->
  return ->
    gulp.src [
      "#{paths.npm}/operative/dist/operative.js"
      path.join(paths.src.lib, 'electron', 'windowGlobals.js')
    ]
      .pipe concat('vendor.js')
      .pipe replace('__BUILD_TYPE__', options.buildType)
      .pipe gulpIf(options.minifiedBuild, uglify(
        mangle: false
      ))
      .pipe gulp.dest(paths.build.js)

