class WishlistPage{
    elements = {
        addAllToBasket: () => cy.get('#addAddToWishlist'),
        postalCode: () => cy.get('.wishlist__postalCodeArea > #zipcode-logistic-input'),
        basketBtn: () => cy.get('#overlayRight > .generalOverlay > .generalOverlay__content > .addToCartOverlay > .addToCartOverlay__footer > .addToCartOverlay__footerToCart > .addToCartOverlay__footerButton > .button')
    }
    clickAddAllToBasket(){
        this.elements.addAllToBasket().should('be.visible')
        this.elements.addAllToBasket().scrollIntoView().click({force: true})
    }
    clickbasketBtn(){
        cy.wait(1000)
        this.elements.basketBtn().scrollIntoView().should('be.visible')
        this.elements.basketBtn().scrollIntoView().dblclick({force: true})
    }
    enterPostalCode(){
        this.elements.postalCode().should('be.visible')
        this.elements.postalCode().type('10115')
    }
}
module.exports = new WishlistPage()