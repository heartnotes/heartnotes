del = require 'del'
gulp = require 'gulp'
path = require 'path'
electron = require 'gulp-electron'
packageJson = require '../package.json'
mergeStream = require 'merge-stream'

module.exports = (paths, options = {}) ->
  () ->
    del.sync [ path.join(paths.build.electron, 'release') ]

    s2 = gulp.src [
      path.join(paths.src.lib, 'electron', 'electronApp.js')
      path.join(paths.root, 'package.json')
    ]
      .pipe gulp.dest(path.join(paths.build.html))

    s2
      .pipe electron({
        src: paths.build.html
        packageJson: packageJson
        release: path.join(paths.build.electron, 'release')
        cache: path.join(paths.build.electron, 'cache')
        version: 'v0.33.4'
        packaging: true
        asar: false
        platforms: ['darwin-x64']
        platformResources:
          darwin:
              CFBundleDisplayName: packageJson.name
              CFBundleIdentifier: packageJson.name
              CFBundleName: packageJson.name
              CFBundleVersion: packageJson.version
              icon: path.join(paths.assets, 'logo.icns')
      })
      .pipe gulp.dest("")

