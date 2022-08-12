import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../pom/HomePage"
import RegistrationPage from "../../pom/RegistrationPage"
import LoginPage from "../../pom/LoginPage"
import ForgetPasswordPage from "../../pom/ForgetPasswordPage"
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

When ('The user login', ()=> {
    HomePage.verifyLoggedOutProfile()
    HomePage.clickLoggedOutProfile()
    LoginPage.enterEmail(email)
    LoginPage.enterPassword(password)
    LoginPage.clickLogInButton()
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
And('A user Login with Old credentials', ()=> {
    HomePage.verifyLoggedOutProfile()
    HomePage.clickLoggedOutProfile()
    LoginPage.enterEmail(email)
    LoginPage.enterPassword(password)
    LoginPage.clickLogInButton()
})
Then('The user should NOT be logged in with errorMSG', ()=> {
    LoginPage.verifyLoginEmailError()
})