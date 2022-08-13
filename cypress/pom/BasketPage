class BasketPage{
    elements = {
        totalPrice: ()=> cy.get('.cartOverview__summaryContainer--desktop > .cartOverview__summaryBox > .summaryBox > :nth-child(1) > .summaryBox__value > .articlePrice > .articlePrice__integer'),
        cancelItem: ()=> cy.get('.cartEntry__closeButton')

    }
    verifyItemsCount(){
        this.elements.cancelItem().should('be.visible')
        this.elements.cancelItem().its('length').should('eq', 5)
    }
    getTotalPrice(){
        this.elements.totalPrice().scrollIntoView().should('be.visible')
        return this.elements.totalPrice().scrollIntoView()
    }
}


module.exports = new BasketPage()