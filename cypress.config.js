const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ivk5ev',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
