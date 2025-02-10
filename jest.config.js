module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
