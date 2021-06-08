const fs = require('fs')
const path = require('path')
const resolve = require('resolve')

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

require('react-scripts/config/env')

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.js'],
  testPathIgnorePatterns: ['/node_modules/'],

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  transform: {
    '^.+\\.(js|css)$': require.resolve(
      'react-scripts/config/jest/babelTransform',
    ),
    '^.+\\.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
    '^(?!.*\\.(js|css)$)': require.resolve(
      'react-scripts/config/jest/fileTransform.js',
    ),
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js)$'],
  resetMocks: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/src/test/**/*',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
