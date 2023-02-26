// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('verifyLanguage', ({ code, text }) => {
   cy.get(".central-featured")
      .within(() => {
         cy.get(`[lang='${code}']`)
            .should('contain.text', text)
      })
})

Cypress.Commands.add('verifyLanguageHyperlink', ({code}) => {
   cy.request(`https://${code}.wikipedia.org`)
      .its('status')
      .should('deep.equal', 200)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })