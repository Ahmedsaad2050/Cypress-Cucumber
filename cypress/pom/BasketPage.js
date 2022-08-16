class BasketPage{
    elements = {
        totalPrice: ()=> cy.get('.cartOverview__summaryContainer--desktop > .cartOverview__summaryBox > .summaryBox > :nth-child(1) > .summaryBox__value > .articlePrice > .articlePrice__integer'),
        cancelItem: ()=> cy.get('.cartEntry__closeButton')////*[@id="responsive"]/div[12]/div[3]/div[3]/div/div[1]/div[4]/div/div/div[3]/button

    }
    verifyItemsCount(){
        cy.wait(1000)
        this.elements.cancelItem().should('be.visible')
        this.elements.cancelItem().its('length').should('eq', 5)
    }
    getTotalPrice(){
        this.elements.totalPrice().scrollIntoView().should('be.visible')
        return this.elements.totalPrice().scrollIntoView()
    }
}


module.exports = new BasketPage()