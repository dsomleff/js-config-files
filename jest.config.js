module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        '<rootDir>/config/unit-tests/test-utils/setupTests.js',
        '<rootDir>/config/unit-tests/mocks/externalsConfig.js',
    ],
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '^.+\\.svg$': '<rootDir>/config/unit-tests/test-utils/svgTransform.js',
    },
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
        '^@src(.*)$': '<rootDir>/src/$1',
        '^@mocks(.*)$': '<rootDir>/config/unit-tests/mocks/$1',
        '^@components(.*)$': '<rootDir>/src/components/$1',
        '^@pages(.*)$': '<rootDir>/src/pages/$1',
        '^@assets(.*)$': '<rootDir>/src/assets/$1',
        '^@helpers(.*)$': '<rootDir>/src/helpers/$1',
        '^@router(.*)$': '<rootDir>/src/router/$1',
        '^@api(.*)$': '<rootDir>/src/helpers/api/$1',
    },
    collectCoverage: true,
    coverageDirectory: '<rootDir>/config/unit-tests/coverage/',
    collectCoverageFrom: ['<rootDir>/src/**', '!<rootDir>/src/index.js'],
    coverageThreshold: {
        './src/components': {
            lines: 30,
        },
    },
};
