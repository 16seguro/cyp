/// <reference types="cypress" />

///const { contains } = require("cypress/types/jquery")

it('google test', () => {

    cy.visit('https://gooogle.com')
    cy.get('#gbqfbb').click()
    cy.visit('https://google.com')
    
    // cy.get('.className', {timeout:5000}).type('jenkins{enter}')
    cy.get('.gLFyf').type('jenkins{enter}')
    cy.contains('Videos').click()
    cy.wait(5000)
    // press ctrl+/ to comment the line
    // cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()

    
})
describe ('Login Test', function(){
//new tet case
it.('login test', function() {

    cy.visit("/")
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
   cy.url().should('contains', '/inventory.html')
    //.click()
   // cy.wait(5000)
   

   
})


})
