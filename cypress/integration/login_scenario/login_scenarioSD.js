import { Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pom/LoginPage"
import commonStepDefinitions from "../common/commonStepDefinitions"
import 'cypress-mochawesome-reporter/register'
const faker = require("faker")
const email = commonStepDefinitions.email
const new_password = commonStepDefinitions.new_password


Then('The user should NOT be logged in with errorMSG', ()=> {
    LoginPage.verifyLoginEmailError()
})
