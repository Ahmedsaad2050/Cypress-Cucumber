import { Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pom/LoginPage"

import 'cypress-mochawesome-reporter/register'



Then('The user should NOT be logged in with errorMSG', ()=> {
    LoginPage.verifyLoginEmailError()
})
