const path = require('path');

module.exports = {
  verbose: true,
  bail: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  collectCoverageFrom: ['src/app/**/*.{js,jsx,ts,tsx}', '!src/app/**/*.test.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  displayName: {
    name: 'CLIENT',
    color: 'orangered',
  },
};
