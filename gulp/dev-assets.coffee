gulp = require 'gulp'


module.exports = (paths, options = {}) ->
  return {
    deps: ['ckeditor', 'fonts', 'jade', 'stylus', 'img', 'js-vendor']
    task: ->
      options.dontExitOnError = true
      gulp.watch paths.watch.img, ['img']
      gulp.watch paths.watch.stylus, ['stylus', 'ckeditor-contents-stylus']
      gulp.watch paths.watch.jade, ['jade']

      options.watchMode = true
      gulp.start 'js-app'
      gulp.start 'js-worker'
  }

