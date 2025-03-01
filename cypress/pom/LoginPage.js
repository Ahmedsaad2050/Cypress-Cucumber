class LoginPage{
    elements = {
        RegisterAccount: () => cy.get('#registerAccount'),
        LogOut: () => cy.get('.sidebarNavigation__rootChild'),
        Email: () => cy.get('#loginEmail'),
        Password: () => cy.get('#loginPassword'),
        LogInButton: () => cy.get('#login-submit'),
        YourCustomerDataBtn: () => cy.get(':nth-child(2) > .sidebarNavigation__secondLevelLabel > .sidebarNavigation__secondLevelCategoryName > span'),
        YourAccessDataBtn: () => cy.get(':nth-child(3) > .customerData__headerContainer > .customerData__collapseItem'),
        EditAccountBtn: () => cy.get('#accessBtn'),
        UpdateEmail: () => cy.get('[name="emailEdit"] > #container_email > .formInput__inputContainer--fullWidth > #email'),
        ConfirmEmail: () => cy.get('#emailConfirm'),
        UpdatedPassword: () => cy.get('#password'),
        UpdatedPassword2: () => cy.get('#passwordConfirm'),
        SubmitPasswordUpdateBtn: () => cy.get('#submitPassword'),
        LoginEmailError: () => cy.get('#loginEmail-error'),

//

        

    }
    
    clickRegister(){
        this.elements.RegisterAccount().click()
    }
    clickLogOut(){
        this.elements.LogOut().click()
    }
    enterEmail(email){
        this.elements.Email().type(email)
    }
    enterPassword(password){
        this.elements.Password().type(password)
    }
    clickLogInButton(){
        this.elements.LogInButton().click()
    }
    clickYourCustomerDataBtn(){
        this.elements.YourCustomerDataBtn().click()
    }
    clickYourAccessDataBtn(){
        this.elements.YourAccessDataBtn().click()
    }
    clickEditAccountBtn(){
        this.elements.EditAccountBtn().click()
    }
    enterUpdateEmail(UpdateEmail){
        this.elements.UpdateEmail().type(UpdateEmail)
    }
    enterConfirmEmail(ConfirmEmail){
        this.elements.ConfirmEmail().type(ConfirmEmail)
    }
    enterUpdatedPassword(UpdatedPassword){
        this.elements.UpdatedPassword().type(UpdatedPassword)
    }
    enterUpdatedPassword2(UpdatedPassword2){
        this.elements.UpdatedPassword2().type(UpdatedPassword2)
    }
    clickEditAccountBtn(){
        this.elements.EditAccountBtn().click()
    }
    clickSubmitPasswordUpdateBtn(){
        this.elements.SubmitPasswordUpdateBtn().click()
    }
    verifyEditAccountBtn(){
        this.elements.EditAccountBtn().should(('be.visible'))
    }
    verifyLoginEmailError(){
        this.elements.LoginEmailError().should(('be.visible'))
        this.elements.LoginEmailError().should('contain','Benutzername nicht gefunden oder Passwort falsch.')

    }
    
}

module.exports = new LoginPage()