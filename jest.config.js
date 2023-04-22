const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });
const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '~/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js'
  },
  modulePaths: ['<rootDir>']
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = createJestConfig(customJestConfig);
