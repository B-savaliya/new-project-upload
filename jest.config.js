/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|my-project|react-native-button)/)",
  ],
  moduleNameMapper: {
    "App.js": "<rootDir>/App.js",
  },
  testEnvironment: "jsdom",
};

module.exports = config;
