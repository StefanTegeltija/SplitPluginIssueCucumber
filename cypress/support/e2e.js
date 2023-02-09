import './commands'

beforeEach(() => {
  cy.viewport('macbook-15')
  cy.clearLocalStorage()
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
