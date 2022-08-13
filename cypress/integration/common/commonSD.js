import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pom/HomePage"
import RegistrationPage from "../../pom/RegistrationPage"
import LoginPage from "../../pom/LoginPage"
import ForgetPasswordPage from "../../pom/ForgetPasswordPage"
import WishlistPage from "../../pom/WishlistPage"
import BasketPage from "../../pom/BasketPage"
import 'cypress-mochawesome-reporter/register'
const faker = require("faker")
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const email = faker.internet.email()
const password = faker.internet.password()+'T@s1'
const new_password = faker.internet.password()+'T@s2';

Given('A user open the home url', ()=> {
    HomePage.goToHome();
    HomePage.clickAccept()
})
When('A user Register with random credentials', ()=> {
    HomePage.clickLoggedOutProfile()
    LoginPage.clickRegister()
    RegistrationPage.selectSalutation('Herr')
    RegistrationPage.enterFirstName(firstName)
    RegistrationPage.enterLastName(lastName)
    RegistrationPage.enterEmail(email)
    RegistrationPage.enterPassword(password)
    RegistrationPage.enterPassword2(password)
    RegistrationPage.clickAcceptCheckbox()
    RegistrationPage.clickSubmitRegister()


})
Then ('The user should be logged in successfully', ()=> {
    HomePage.verifyLoggedInProfile()
    HomePage.clickLoggedInProfile()
    HomePage.verifyTitleHead(firstName, lastName)
})
When ('The user log out', ()=> {
    LoginPage.clickLogOut()
    HomePage.verifyLoggedOutProfile()
    HomePage.clickLoggedOutProfile()
})
And ('Request a password reset', ()=> {
    ForgetPasswordPage.clickForgotEmail()
    ForgetPasswordPage.enterForgottenEmailAddress(email)
    ForgetPasswordPage.clickpasswordForgottenSubmitButton()
})
Then('The user should get the mail reset msg', ()=> {
    ForgetPasswordPage.validateResetMsg()
})

And ('Edit the password', ()=> {
    HomePage.verifyLoggedInProfile()
    HomePage.clickLoggedInProfile()
    LoginPage.clickYourCustomerDataBtn()
    LoginPage.clickYourAccessDataBtn()
    LoginPage.clickEditAccountBtn()
    LoginPage.enterUpdateEmail(email)
    LoginPage.enterConfirmEmail(email)
    LoginPage.enterUpdatedPassword(new_password)
    LoginPage.enterUpdatedPassword2(new_password)
    LoginPage.clickSubmitPasswordUpdateBtn()
})
Then ('It should be updated with new random password', ()=> {
    LoginPage.verifyEditAccountBtn()
})
When('A user Login with Updated credentials', ()=> {
    HomePage.verifyLoggedOutProfile()
    HomePage.clickLoggedOutProfile()
    LoginPage.enterEmail(email)
    LoginPage.enterPassword(new_password)
    LoginPage.clickLogInButton()
})
And('The user Login with Old credentials', ()=> {
    HomePage.verifyLoggedOutProfile()
    HomePage.clickLoggedOutProfile()
    LoginPage.enterEmail(email)
    LoginPage.enterPassword(password)
    LoginPage.clickLogInButton()
})
Then('The user should NOT be logged in with errorMSG', ()=> {
    LoginPage.verifyLoginEmailError()
})
When('The user can select 5 items',()=> {
    HomePage.clickDealsBtn()
    HomePage.clickItem1()
    HomePage.getItemPrice().then(function(text){
        cy.log((text).text())
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
And('A user go to wishlist to add items to Basket', ()=> {
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