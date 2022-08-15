class WishlistPage{
    elements = {
        addAllToBasket: () => cy.get('#addAddToWishlist'),
        postalCode: () => cy.get('.wishlist__postalCodeArea > #zipcode-logistic-input'),
        basketBtn: () => cy.get('.headerBrand__element--cart > .headerElement > .headerElement__link > .headerElement__icon')
    }
    clickAddAllToBasket(){
        this.elements.addAllToBasket().should('be.visible')
        this.elements.addAllToBasket().scrollIntoView().click({force: true})
    }
    clickbasketBtn(){
        this.elements.basketBtn().scrollIntoView().should('be.visible')
        this.elements.basketBtn().scrollIntoView().click({force: true})
    }
    enterPostalCode(){
        this.elements.postalCode().should('be.visible')
        this.elements.postalCode().type('10115')
    }
}
module.exports = new WishlistPage()