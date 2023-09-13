
const config = {

  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/*.spec.ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.tsx",
  ],
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/fileMock.ts`,
    "^.+\\.module\\.(css|sass|scss|less)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  resetMocks: true
}

export default config
