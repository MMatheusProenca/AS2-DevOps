import {Given,Then} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://mmatheusproenca.github.io/AS2-DevOps/'

Given('I open web app page', () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
