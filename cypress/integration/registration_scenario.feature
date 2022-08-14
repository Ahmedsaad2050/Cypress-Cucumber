Feature: Registration_Scenario
    Feature This is for Registration successfully
    Scenario: Success Register
        Given The user open the home url
        When The user Register with random credentials
        Then The user should be logged in successfully
        When The user log out
        And The user Request a password reset
        Then The user should get the mail reset msg
        When The user Login with Old credentials
        And The user Edit the password
        Then It should be updated with new random password

