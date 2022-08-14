Feature: Shopping_Scenario
    Feature This is for Shopping Functionality
    Scenario: Success Shopping
        Given The user open the home url
        When The user Register with random credentials
        Then The user should be logged in successfully
        When The user can select 5 items
        And The user go to wishlist to add items to Basket
        Then The Basket contains all the items
        And The merchendise value is correct
    