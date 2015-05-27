gulp = require 'gulp'


module.exports = (paths, options = {}) ->
  return {
    deps: ['jade', 'css', 'img', 'js-vendor']
    task: ->
      options.dontExitOnError = true
      gulp.watch paths.watch.img, ['img']
      gulp.watch paths.watch.stylus, ['stylus']
      gulp.watch paths.watch.jade, ['jade']

      options.watchify = true
      gulp.start 'js-app'
  }

