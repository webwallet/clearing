'use strict'

function reducer(from, next) {
  return from.then(next)
}

function asyncpipe(...functions) {
  let pipe = (start) => {
    return functions.reduce(reducer, Promise.resolve(start))
  }

  return pipe
}

module.exports = asyncpipe
