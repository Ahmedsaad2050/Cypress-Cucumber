import { And , Then , When} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pom/HomePage"
import WishlistPage from "../../pom/WishlistPage"
import BasketPage from "../../pom/BasketPage"
import 'cypress-mochawesome-reporter/register'


When('The user can select 5 items',()=> {
    HomePage.clickDealsBtn()
    HomePage.clickItem1()
    HomePage.getItemPrice().then(function($text){
        cy.log(($text).text())
    })
    HomePage.clickWishlistBtn()
    HomePage.goBack()
    HomePage.clickItem2()
    HomePage.clickWishlistBtn()
    HomePage.goBack()
    HomePage.clickItem3()
    HomePage.clickWishlistBtn()
    HomePage.goBack()
    HomePage.clickItem4()
    HomePage.clickWishlistBtn()
    HomePage.goBack()
    HomePage.clickItem5()
    HomePage.clickWishlistBtn()
})
And('The user go to wishlist to add items to Basket', ()=> {
    HomePage.clickMyWishlistBtn()
    WishlistPage.enterPostalCode()
    WishlistPage.clickAddAllToBasket()
})
Then('The Basket contains all the items', ()=> {
    WishlistPage.clickbasketBtn()

})
And('The merchendise value is correct', ()=> {
    BasketPage.verifyItemsCount()
    BasketPage.getTotalPrice().should('contain','2.945')
})