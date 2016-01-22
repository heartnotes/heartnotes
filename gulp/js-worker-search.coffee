browserify = require 'browserify'

replace = require 'gulp-replace'
path = require 'path'
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
      .on 'error', (err) ->
        gutil.log(err.stack)
      .pipe source('search-webworker-addon.js')
      .pipe replace('__BUILD_TYPE__', options.buildType)
      .pipe gulpIf(options.minifiedBuild, uglify(
        mangle: true
        # output:
        #   beautify: true
      ))
      .pipe concat('worker-search.js')
      .pipe gulp.dest(paths.build.js)

  return -> 
    b = browserify(
      entries: path.join(paths.src.js, 'data', 'search', 'search-webworker-addon.js')
      debug: !options.minifiedBuild
      cache: {}
      packageCache: {}
    )

    # From http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html
    if options.watchMode
      b = watchify(b)
        .on 'update', ->
          gutil.log 'Rerunning browserify (worker-search)...'
          updateStart = Date.now()
          _process(b)
          gutil.log '...Done (' + (Date.now() - updateStart) + 'ms)'

    # kick-off
    _process(b)



