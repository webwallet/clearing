'use strict'

const directory = require('require-directory')

module.exports = (modul3, path, options) => {
  return directory(modul3, path, {exclude: /\.test\.js/, ...options})
}