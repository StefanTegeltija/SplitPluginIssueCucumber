const { defineConfig } = require('cypress')
const cypressSplit = require('./src')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      on('file:preprocessor', cucumber())
      // IMPORTANT: return the config object
      return config
    },
    experimentalRunAllSpecs: true,
    excludeSpecPattern: 'cypress/e2e/**/*.js',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
  },
})
