const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
url :'https://rahulshettyacademy.com/angularpractice/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 6000,

  specPattern: "cypress/integration/TestFramework.cy.js"
  },
});
