// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("isNotActionable", function(selector, done) {
  cy.get(selector).click({ force: true })
  cy.once('fail', (err) => {
    expect(err.message).to.include('cy.click() failed because this element');
    expect(err.message).to.include('is being covered by another element');
    done();
  });
  cy.get("#button-covered-in-span").click().then(x => {
    done(new Error('Expected element NOT to be clickable, but click() succeeded'));
  })
})