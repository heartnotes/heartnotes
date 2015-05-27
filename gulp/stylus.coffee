gulp = require 'gulp'
gulpIf = require 'gulp-if'
path = require 'path'
prefix = require('gulp-autoprefixer')
minifyCss = require('gulp-minify-css')
concat = require('gulp-concat')
stylus = require('gulp-stylus')
nib = require('nib')
rupture = require('rupture')


module.exports = (paths, options = {}) ->
  return ->
    gulp.src paths.files.stylus
      .pipe stylus({
        use: [ nib(), rupture() ]
      })
      .pipe prefix()
      .pipe concat('app.css')
      .pipe gulpIf(!options.debugBuild, minifyCss())
      .pipe gulp.dest(paths.build.css)

