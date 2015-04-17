gulp = require('gulp')
gutil = require('gulp-util')

jade = require('gulp-jade')
concat = require('gulp-concat')
uglify = require('gulp-uglify')
stylus = require('gulp-stylus')
nib = require('nib')
rupture = require('rupture')

server = require('gulp-server-livereload')



paths = 
  src:
    jade: './src/jade/*.jade'
    js: './src/js/*.js'
    stylus: './src/stylus/style.styl'
  watch:
    jade: './src/jade/**/*.jade'
    js: './src/js/**/*.js'
    stylus: './src/stylus/**/*.styl'
  build:
    html: './'
    js: './'
    css: './'


gulp.task 'jade', ->
  gulp.src paths.src.jade
    .pipe jade()
    .on 'error', gutil.log
    .pipe gulp.dest(paths.build.html)


gulp.task 'stylus', ->
  gulp.src paths.src.stylus
    .pipe stylus({
      use: [ nib(), rupture() ]
      compress: true
    })
    .on 'error', gutil.log
    .pipe gulp.dest(paths.build.css)


gulp.task 'js', ->
  gulp.src paths.src.js
    .pipe uglify()
    .pipe concat('app.js')
    .pipe gulp.dest(paths.build.js)


gulp.task 'build', ['jade', 'stylus', 'js']


gulp.task 'server', ->
  gulp.src './'
    .pipe server({
      host: 'local.hiddentao.github.io'
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

