'use strict'

const flows = require('./flows')
const asyncpipe = require('@local/asyncpipe')

function createTransactionPipeline() {
  let pipeline = asyncpipe.apply(null, flows.default)

  return {run: pipeline}
}

module.exports = createTransactionPipeline
