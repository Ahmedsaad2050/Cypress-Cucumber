Feature: Positive_Scenario
    Feature This is for Registration successfully
    Scenario: Success Register
    Given A user open the home url
    When A user Register with random credentials
    Then The user should be logged in successfully
    When The user log out
    And Request a password reset
    Then The user should get the mail reset msg
    When The user login
    And Edit the password
    Then It should be updated with new random password

