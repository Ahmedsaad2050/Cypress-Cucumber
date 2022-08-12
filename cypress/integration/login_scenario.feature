Feature: Login_Scenario
    Feature This is for Login
        Scenario: Success Register
    Given A user open the home url
    When A user Register with random credentials
    Then The user should be logged in successfully
    And Edit the password
    Then It should be updated with new random password


Scenario: Success Login
    Given A user open the home url
    When A user Login with Updated credentials
    Then The user should be logged in successfully
    When The user log out
    And A user Login with Old credentials
    Then The user should NOT be logged in with errorMSG
    

    Scenario: Success Shopping
    Given A user open the home url
    When A user Login with Updated credentials
    Then The user should be logged in successfully
    #When The user can select 5 items
    #And A user go to wishlist to add items to Basket
    #Then The Basket contains all the items
    #And The merchendise value is correct

