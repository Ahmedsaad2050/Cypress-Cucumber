import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import 'cypress-mochawesome-reporter/register';
const faker = require("faker");
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password()+'T@s1';

Given('A user open the home url', ()=> {
    cy.visit('/')
})
When('A user Register with random credentials', ()=> {
    cy.get('[data-accept-action="selected"] > .button').click()
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__icon').click({force: true})
    cy.get('#registerAccount').click()
    cy.get('#salutation').select('Herr')

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('.formInput__inputContainer > #email').type(email)
    cy.get('#password').type(password)
    cy.get('#password2').type(password)
    cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox').click()
    cy.get('#register-submit').click()

})
Then ('The user should be logged in successfully', ()=> {
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix', { timeout: 1000 }).should('contain','Dein Konto')
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix').dblclick({force: true})
    cy.get('.titleHeadline', { timeout: 3000 }).should('be.visible')
    cy.get('.titleHeadline').should('contain','Hallo, '+firstName+' '+lastName)
})
When ('The user log out', ()=> {
    cy.get('.sidebarNavigation__rootChild').click()
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix', { timeout: 1000 }).should('be.visible')
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix').dblclick({force: true})
})
And ('Request a password reset', ()=> {
    cy.get('.existingAccount__forgotten').click()
        cy.get('#passwordForgottenEmail').type(email)
        cy.get('#passwordForgottenSubmitId').click()
        cy.wait(2000)  
})


When ('The user login', ()=> {
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix', { timeout: 1000 }).should('be.visible')
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix').dblclick({force: true})
    cy.get('#loginEmail').type(email)
    cy.get('#loginPassword').type(password)
    cy.get('#login-submit').click()

})
And ('Edit the password', ()=> {
    cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix', { timeout: 1000 }).should('contain','Dein Konto')
        cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix').dblclick({force: true})
        cy.get(':nth-child(2) > .sidebarNavigation__secondLevelLabel > .sidebarNavigation__secondLevelCategoryName > span').dblclick()
        cy.get(':nth-child(3) > .customerData__headerContainer > .customerData__collapseItem').click()
        cy.get('#accessBtn').click()
        const new_password = faker.internet.password()+'T@s1';
        cy.get('[name="emailEdit"] > #container_email > .formInput__inputContainer--fullWidth > #email').type(email)
        cy.get('#emailConfirm').type(email)
        cy.get('#password').type(new_password)
        cy.get('#passwordConfirm').type(new_password)
        cy.get('#submitPassword').click()
        
})
Then ('It should be updated with new random password', ()=> {
    cy.get('#accessBtn').should(('be.visible'))
})