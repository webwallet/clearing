'use strict'

const template = require('@root/transaction/templates/record')

function createTransactionRecordTemplate(parameters = {}) {
  parameters.transaction.record = {...template}

  return parameters
}

module.exports = createTransactionRecordTemplate
