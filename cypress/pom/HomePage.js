class HomePage{
    elements = {
        clickAccept: () => cy.get('[data-accept-action="selected"] > .button'),
        loggedOutProfile: () => cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix'),
        loggedInProfile: () => cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix'),
        titleHeadline: () =>     cy.get('.titleHeadline', { timeout: 3000 }),

    }
    goToHome() {
        cy.visit('/')
    }
    clickAccept() {
        this.elements.clickAccept().click()
    }
    clickLoggedOutProfile(){
        this.elements.loggedOutProfile().click()
    }
    clickLoggedInProfile(){
        this.elements.loggedInProfile().dblclick({force: true})
    }
    verifyLoggedInProfile(){
        this.elements.loggedInProfile().should('contain','Dein Konto')
    }
    verifyLoggedOutProfile(){
        this.elements.loggedOutProfile().should('contain','Anmelden')
    }//
    verifyTitleHead(firstName, lastName){
        this.elements.titleHeadline().should('be.visible')
        this.elements.titleHeadline().should('contain','Hallo, '+firstName+' '+lastName)

    }
    

}
module.exports = new HomePage()