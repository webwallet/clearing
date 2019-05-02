'use strict'

function parseTransactionRequestAddresses(parameters = {}) {
  let record = parameters.transaction.record
  record.data.outputs.push({
    address: '' // wip
  })

  return parameters
}

module.exports = parseTransactionRequestAddresses
