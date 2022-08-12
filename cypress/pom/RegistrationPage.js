class RegistrationPage{
    elements = {
    salutation: () =>     cy.get('#salutation'),
    FirstName: () => cy.get('#firstName'),
    LastName: () => cy.get('#lastName'),
    Email: () => cy.get('.formInput__inputContainer > #email'),
    Password: () => cy.get('#password'),
    Password2: () => cy.get('#password2'),
    AcceptCheckbox: () => cy.get('.accountNew__agbCheckbox > .accountNew__checkbox > .checkbox > .checkbox__checkbox'),
    SubmitRegister: () => cy.get('#register-submit')

    }
    enterFirstName(firstName){
        this.elements.FirstName().type(firstName)
    }
    selectSalutation(salutation){
        this.elements.salutation().select(salutation)
    }
    enterEmail(Email){
        this.elements.Email().type(Email)
    }
    enterLastName(LastName){
        this.elements.LastName().type(LastName)
    }
    enterPassword(Password){
        this.elements.Password().type(Password)
    }
    enterPassword2(Password2){
        this.elements.Password2().type(Password2)
    }
    clickAcceptCheckbox(){
        this.elements.AcceptCheckbox().click()
    }
    clickSubmitRegister(){
        this.elements.SubmitRegister().click()
    }
    
}
module.exports = new RegistrationPage()