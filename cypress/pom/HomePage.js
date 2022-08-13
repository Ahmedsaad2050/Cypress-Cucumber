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
    }
    goBack(){
        cy.go('back')
    }

    clickWishlistBtn(){
        this.elements.wishlistBtn().scrollIntoView().should('be.visible')
        this.elements.wishlistBtn().scrollIntoView().click({force: true})
    }
    clickMyWishlistBtn(){
        cy.wait(1000)
        this.elements.myWishlistBtn().scrollIntoView().should('be.visible')
        this.elements.myWishlistBtn().scrollIntoView().click({force: true})
    }
    clickItem1(){
        this.elements.item1().click({force: true})
    }
    clickItem2(){
        this.elements.item2().click({force: true})
    }
    clickItem3(){
        this.elements.item3().click({force: true})
    }
    clickItem4(){
        this.elements.item4().click({force: true})
    }
    clickItem5(){
        this.elements.item5().click({force: true})
    }
    clickAccept() {
        this.elements.clickAccept().click({force: true})
    }
    clickLoggedOutProfile(){
        this.elements.loggedOutProfile().dblclick({force: true})
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