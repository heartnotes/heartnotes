gulp = require 'gulp'
server = require 'gulp-server-livereload'


module.exports = (paths, options = {}) ->
  deps: ['dev-assets']
  task: ->
    gulp.src paths.build.html
      .pipe server({
        host: '0.0.0.0'
        port: 3000
        livereload:
          enable: true
          port: 55456
        directoryListing: false
        open: false
      })
