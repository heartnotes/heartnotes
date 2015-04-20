gulp = require('gulp')
gutil = require('gulp-util')
gulpIf = require('gulp-if')
merge = require('ordered-merge-stream')
path = require('path')
argv = require('yargs').argv

browserify = require('browserify')
source = require('vinyl-source-stream2')

jade = require('gulp-jade')
concat = require('gulp-concat')
uglify = require('gulp-uglify')
stylus = require('gulp-stylus')
minifyCss = require('gulp-minify-css')
nib = require('nib')
rupture = require('rupture')

server = require('gulp-server-livereload')


minify = (!argv.debug)



paths = 
  bower: './bower_components'
  src:
    jade: './src/jade/*.jade'
    js: 
      app: './src/js/app.js'
      worker: './src/js/worker.js'
    stylus: './src/stylus/style.styl'
  watch:
    jade: './src/jade/**/*.jade'
    js: './src/js/**/*.js'
    stylus: './src/stylus/**/*.styl'
  build:
    html: './'
    js: './'
    css: './'
    fonts: './fonts'


# extra CSS
baseCssSrc = [
  path.join paths.bower, 'nouislider', 'distribute', 'jquery.nouislider.min.css'
  path.join paths.bower, 'Selectivity.js', 'dist', 'selectivity-full.min.css'
]



gulp.task 'jade', ->
  gulp.src paths.src.jade
    .pipe jade()
    .on 'error', gutil.log
    .pipe gulp.dest(paths.build.html)


gulp.task 'stylus', ->  
  baseCss = gulp.src baseCssSrc
    .pipe concat('base.css')

  appCss = gulp.src paths.src.stylus
    .pipe stylus({
      use: [ nib(), rupture() ]
      compress: false
    })
    .on 'error', gutil.log
    .pipe concat('app.css')

  merge([baseCss, appCss])
    .pipe concat('style.css')
    .pipe gulpIf(minify, minifyCss())
    .on 'error', gutil.log
    .pipe gulp.dest(paths.build.css)



gulp.task 'js-worker', ->
  workerJs = browserify(
    entries: paths.src.js.worker
    debug: true
  )
    .bundle()
    .pipe source('worker.js')
    .pipe gulpIf(minify, uglify())
    .on('error', gutil.log)
    .pipe gulp.dest(paths.build.js)




gulp.task 'js-app', ->
  libJs = gulp.src [
    path.join(paths.bower, 'zepto', 'zepto.js')
    path.join(paths.bower, 'underscore', 'underscore.js')
    path.join(paths.bower, 'backbone', 'backbone.js')
    path.join(paths.bower, 'backbone-elements', 'backbone-elements.js')
    path.join(paths.bower, 'nouislider', 'distribute', 'jquery.nouislider.js')
    path.join(paths.bower, 'Selectivity.js', 'dist', 'selectivity-full.js')
    path.join(paths.bower, 'js-marker-clusterer', 'src', 'markerclusterer.js')
  ]
    .pipe concat('libs.js')

  appJs = browserify(
    entries: paths.src.js.app
    debug: true
  )
    .bundle()
    .on('error', gutil.log)
    .pipe source('app.js')

  merge([libJs, appJs])
    .pipe concat('app.js')
    .pipe gulpIf(minify, uglify())
    .on('error', gutil.log)
    .pipe gulp.dest(paths.build.js)



gulp.task('js', ['js-app', 'js-worker'])


gulp.task 'fonts', ->
  gulp.src [
    path.join(paths.bower, 'font-awesome-stylus', 'fonts', '*.*')
  ]
    .pipe gulp.dest(paths.build.fonts)



gulp.task 'build', ['jade', 'stylus', 'js', 'fonts']


gulp.task 'server', ->
  gulp.src './'
    .pipe server({
      host: 'local.hiddentao.github.io'
      port: 3000,
      livereload:
        enable: true
        filter: (filePath, cb) ->
          cb( !(/src/).test(filePath) )
      directoryListing: false
      open: false
    })


gulp.task 'dev', ['build', 'server'], ->
  gulp.watch paths.watch.jade, ['jade']
  gulp.watch paths.watch.stylus, ['stylus']
  gulp.watch paths.watch.js, ['js']



gulp.task 'default', ['dev']

