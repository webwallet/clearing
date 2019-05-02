'use strict'

const {
  record,
  request
} = require('../stages')

const defaultFlow = [
  request.object.validate,
  record.template.create,
  request.addresses.parse,
  // ...
]

module.exports = defaultFlow
