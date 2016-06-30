gulp = require 'gulp'
gzip = require 'gulp-gzip'

module.exports = (paths, options = {})->
  return (cb) ->
    gulp.src "#{paths.build.root}/**/**/**/**/**/**/**/*.{js,css,html}"
      .pipe gzip({ gzipOptions: { level: 9 }})
      .pipe gulp.dest(paths.build.root)
