export default {
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  setupFiles: [
    './src/test/setup/mocks.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/test/setup/',
  ]
}
