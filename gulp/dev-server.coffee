gulp = require 'gulp'
server = require 'gulp-server-livereload'


module.exports = (paths, options = {}) ->
  return ->
    gulp.src paths.build.html
      .pipe server({
        port: 3000
        livereload:
          enable: true
          port: 55456
        directoryListing: false
        open: false
      })
