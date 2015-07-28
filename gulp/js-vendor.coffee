gulp = require 'gulp'
gulpIf = require 'gulp-if'
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
      .pipe gulpIf(!options.debugBuild, uglify())
      .pipe gulp.dest(paths.build.js)

