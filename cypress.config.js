const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    animationDistanceThreshold: 20,
    defaultCommandTimeout: 5000,
    viewportHeight: 600,
    viewportWidth: 1000,
    pageLoadTimeout: 60000,
    video: false,
    testIsolation: false,
    baseUrl: "http://zero.webappsecurity.com"
  },
});
