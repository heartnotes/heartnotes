gulp = require 'gulp'
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
        .pipe concat('worker.js')
        .pipe gulpIf(!options.debugBuild, uglify())
        .pipe gulp.dest(paths.build.js)

    build()

    if not options.watchMode
      gulp.watch( [ "#{paths.src.lib}/sjcl/*.js" ], (
        () -> 
          gutil.log 'Rebuilding webworker js'
          build()
      ))

