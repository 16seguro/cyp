/// <reference types="cypress" />
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

//new tet case
it('login test', function() {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin{enter}')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123{enter}')
    //cy.get('.oxd-button').click()
    //cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-icon').click()
    cy.wait(5000)
    //cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').dblclick()
   // cy.get('.orangehrm-header-container > .oxd-button').click()

   //cy.get('.ng-valid-maxlenth > .modal-footer').find('#systemUserSaveBtn').click()
})