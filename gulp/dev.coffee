gulp = require 'gulp'


module.exports = (paths, options = {}) ->
  return {
    deps: ['dev-assets', 'dev-server']
  }

