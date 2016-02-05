path = require 'path'
gulp = require 'gulp'
shell = require 'shelljs'


module.exports = (paths, options = {}) ->
  {
    deps: ['dev-assets', 'electron-build-dev']
    task: (cb) ->
      shell.exec "DEV_MODE=true electron --debug=51234 #{paths.build.html}", (code, output) ->
        console.log output
        
        if (0 isnt code)
          cb(new Error("Exit error: #{code}"))
        else
          cb()
  }

  