module.exports = {
  bail: 0,
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '<rootDir>/src/domain/useCases/*.ts',
    '<rootDir>/src/application/handlers/**/*.ts'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1'
  },
  rootDir: __dirname,
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  testEnvironment: 'node'
}
