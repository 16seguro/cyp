import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const homeSaucePage = require('./../pages/homeSaucePage')

Given('a user opens the login page', ()=>{
    cy.visit("/")
}) 
When('a user enters the username {string}', (username)=>{
    //cy.get('#user-name').type(username)
    homeSaucePage.typeUsername(username)
}) 
And('a user enters the password {string}', (password)=>{
    
    //cy.get('#password').type(password   )
    homeSaucePage.typePassword(password)
}) 
And('a user clicks on the login button', ()=>{
    // cy.get('#login-button').click()
    homeSaucePage.clickLogin()
}) 
Then('the user will be logged in', ()=>{
   cy.url().should('contains', '/inventory.html')

}) 
Then('the user will be receiving a failed message', ()=>{
   // cy.get('h3').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
   homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
})