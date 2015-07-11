path = require 'path'
gulp = require 'gulp'
shell = require 'shelljs'


module.exports = (paths, options = {}) ->
  {
    deps: ['electron']
    task: (cb) ->
      shell.exec "electron --debug=51234 #{paths.build.electron}", (code, output) ->
        console.log output
        
        if (0 isnt code)
          cb(new Error("Exit error: #{code}"))
        else
          cb()
  }