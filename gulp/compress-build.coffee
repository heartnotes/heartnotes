gulp = require 'gulp'
gzip = require 'gulp-gzip'
utf8 = require 'gulp-utf8-convert'

module.exports = (paths, options = {})->
  return (cb) ->
    gulp.src "#{paths.build.root}/**/**/**/**/**/**/**/*.{js,css,html}"
      .pipe utf8()
      .pipe gzip({ gzipOptions: { level: 9 }})
      .pipe gulp.dest(paths.build.root)
