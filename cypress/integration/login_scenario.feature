Feature: Login_Scenario
    Feature This is for Login
        Scenario: Success & Failure Login
    Given A user open the home url
    When A user Register with random credentials
    Then The user should be logged in successfully
    And Edit the password
    Then It should be updated with new random password
    When The user log out
    When A user Login with Updated credentials
    Then The user should be logged in successfully
    When The user log out
    And The user Login with Old credentials
    Then The user should NOT be logged in with errorMSG