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

Cypress.Commands.add('search', (value)=>{
    cy.fixture('index.json').then((index)=>{
        cy.get(index.searchBox).type(value);
        cy.get(index.searchButton).click();

    })
})
Cypress.Commands.add('containAlert', (value)=>{
    cy.fixture('searchResult.json').then((search)=>{
        cy.get(search.alert).should('contain',value);
    })
})
Cypress.Commands.add('contain', (value)=>{
    cy.fixture('searchResult.json').then((search)=>{
        cy.get(search.title).should('contain',value);
    })
})