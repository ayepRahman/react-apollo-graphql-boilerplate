const path = require('path');

module.exports = {
  verbose: true,
  bail: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  collectCoverageFrom: ['src/app/**/__tests__/*.{js,jsx,ts,tsx}'],
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
    color: 'cyan',
  },
};
