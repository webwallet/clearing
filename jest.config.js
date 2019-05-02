'use strict'

module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '@root(.*)$': '<rootDir>/$1',
    '@local(.*)$': '<rootDir>/local_modules/$1'
  }
}
