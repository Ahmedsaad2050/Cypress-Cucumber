class ForgetPasswordPage{
    elements = {
        ForgottenEmailButton: () => cy.get('.existingAccount__forgotten'),
        ForgottenEmailAddress: () => cy.get('#passwordForgottenEmail'),
        PasswordForgottenSubmitButton: () => cy.get('#passwordForgottenSubmitId'),
        ResetMsg: () => cy.get('.checkMailbox__text--green')


    }
    clickForgotEmail(){
        this.elements.ForgottenEmailButton().click()
    }
    enterForgottenEmailAddress(email){
        this.elements.ForgottenEmailAddress().type(email)
    }
    clickpasswordForgottenSubmitButton(){
        this.elements.PasswordForgottenSubmitButton().click()
    }
    validateResetMsg(){
        cy.wait(2000)  
        this.elements.ResetMsg().should('contain','Eine E-Mail mit den Anweisungen, um Dein Passwort zurückzusetzen wurde an Dich verschickt. Bitte überprüfe Dein Postfach.')
    }
}
module.exports = new ForgetPasswordPage()