browserify = require 'browserify'

concat = require 'gulp-concat'
source = require 'vinyl-source-stream2'
uglify = require 'gulp-uglify'
watchify = require 'watchify'

gulp = require 'gulp'
gutil = require 'gulp-util'
gulpIf = require 'gulp-if'



module.exports = (paths, options = {}) ->
  _process = (b) ->
    b.bundle()
      .pipe source('app.js')
      .pipe gulpIf(!options.debugBuild, uglify())
      .on 'error', (err) ->
        gutil.log(err.stack)
      .pipe gulp.dest(paths.build.js)

  return -> 
    b = browserify(
      entries: paths.files.js
      debug: !!options.debugBuild
      cache: {}
      packageCache: {}
    )

    # From http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html
    if options.watchify
      b = watchify(b)
        .on 'update', ->
          gutil.log 'Rerunning browserify...'
          updateStart = Date.now()
          _process(b)
          gutil.log '...Done (' + (Date.now() - updateStart) + 'ms)'

    # kick-off
    _process(b)



