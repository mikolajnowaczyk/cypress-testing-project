import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const version = config.env.version || 'local';
       // load env from json
        config.env = require(`./cypress/config/${version}.json`);
      // change baseUrl
        config.baseUrl = config.env.baseUrl;
        return config;
    },
    watchForFileChanges: false,
    animationDistanceThreshold: 20,
    defaultCommandTimeout: 5000,
    viewportHeight: 600,
    viewportWidth: 1000,
    pageLoadTimeout: 60000,
    video: false,
    testIsolation: false,
  },
});
