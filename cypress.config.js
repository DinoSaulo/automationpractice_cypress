const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 10000,
    "baseUrl": "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
