import { Then } from "cypress-cucumber-preprocessor/steps"
import ForgetPasswordPage from "../../pom/ForgetPasswordPage"
import 'cypress-mochawesome-reporter/register'

Then('The user should get the mail reset msg', ()=> {
    ForgetPasswordPage.validateResetMsg()
})
