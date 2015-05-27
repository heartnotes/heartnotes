gulp = require 'gulp'
server = require 'gulp-server-livereload'


module.exports = (paths, options = {}) ->
  return ->
    gulp.src paths.build.html
      .pipe server({
        host: '0.0.0.0'
        port: 3000
        livereload:
          enable: true
          host: '0.0.0.0'
          port: 55456
        directoryListing: false
        open: false
      })
