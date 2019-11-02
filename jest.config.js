module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // ignore the compiled javascript
  testPathIgnorePatterns: ['<rootDir>/dist']
}
