'use strict'

require('module-alias/register')

const directory = require('@local/require-directory')

module.exports = {
  transaction: directory(module, './transaction')
}
