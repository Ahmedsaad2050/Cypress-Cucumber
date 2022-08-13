class HomePage{
    elements = {
        clickAccept: () => cy.get('[data-accept-action="selected"] > .button'),
        loggedOutProfile: () => cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix'),
        loggedInProfile: () => cy.get('.headerBrand__element--login > .headerElement > .headerElement__link > .headerElement__text > .headerElement__suffix'),
        titleHeadline: () =>     cy.get('.titleHeadline', { timeout: 3000 }),
        DealsBtn: () => cy.get(':nth-child(10) > .menu__link > .menu__linkHref > .menuLinkTitles'),
        item1: () => cy.get('[data-tile-position="1"] > .articleTile__content > .articleTile__info > .articleInfo'),
        itemPrice: () => cy.get('.articlePrices__price--onSaleADS > .articlePrice > .articlePrice__integer'),
        item2: () => cy.get('[data-tile-position="2"] > .articleTile__content > .articleTile__info > .articleInfo'),
        item3: () => cy.get('[data-tile-position="4"] > .articleTile__content > .articleTile__info > .articleInfo'),
        item4: () => cy.get('[data-tile-position="5"] > .articleTile__content > .articleTile__info > .articleInfo'),
        item5: () => cy.get('[data-tile-position="10"] > .articleTile__content > .articleTile__info > .articleInfo'),
        wishlistBtn: () => cy.get('.wishlistIcon'),
        myWishlistBtn: () => cy.get('.headerBrand__element--wishlist > .headerElement > .headerElement__link > .headerElement__icon'),
    }//
    goToHome() {
        cy.visit('/')
    }
    clickDealsBtn(){
        this.elements.DealsBtn().should('be.visible')
        this.elements.DealsBtn().scrollIntoView().dblclick({force: true})
    }
    getItemPrice(){
        return this.elements.itemPrice()
        // .then(($text) => {
        //     return cy.wrap($text.text())
            // cy.log($text.text())
            // cy.log(this.elements.itemPrice().its('text'))
        //     // cy.log(value)
            
        //     })
    }
    goBack(){
        cy.go('back')
    }//cy.go('back')

    clickWishlistBtn(){
        this.elements.wishlistBtn().scrollIntoView().should('be.visible')
        this.elements.wishlistBtn().scrollIntoView().click({force: true})
    }
    clickMyWishlistBtn(){
        this.elements.myWishlistBtn().scrollIntoView().should('be.visible')
        this.elements.myWishlistBtn().scrollIntoView().click()
    }
    clickItem1(){
        this.elements.item1().click()
    }
    clickItem2(){
        this.elements.item2().click()
    }
    clickItem3(){
        this.elements.item3().click()
    }
    clickItem4(){
        this.elements.item4().click()
    }
    clickItem5(){
        this.elements.item5().click()
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