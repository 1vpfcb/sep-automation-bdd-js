@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

Background:
    Given user is on the enrollment page
    And user has completed start application step
    



        

Scenario: Verify that immediate error message is present if the card number is wrong or too short