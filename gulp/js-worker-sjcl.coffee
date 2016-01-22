gulp = require 'gulp'
replace = require 'gulp-replace'
gulpIf = require 'gulp-if'
path = require 'path'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
gutil = require 'gulp-util'


module.exports = (paths, options = {}) ->
  return ->
    build = () -> 
      gulp.src [
        "#{paths.npm}/sjcl/sjcl.js"
        "#{paths.npm}/sjcl/core/sha512.js"
        "#{paths.src.lib}/sjcl/sjcl-webworker-addons.js"
      ]
        .pipe concat('worker-sjcl.js')
        .pipe replace('__BUILD_TYPE__', options.buildType)
        .pipe gulpIf(options.minifiedBuild, uglify(
          mangle: true
          # output:
          #   beautify: true
        ))
        .pipe gulp.dest(paths.build.js)

    build()

    if not options.watchMode
      gulp.watch( [ "#{paths.src.lib}/sjcl/*.js" ], (
        () -> 
          gutil.log 'Rebuilding webworker js'
          build()
      ))

