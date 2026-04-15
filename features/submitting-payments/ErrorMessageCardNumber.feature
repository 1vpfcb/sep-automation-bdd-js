@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

Background:
    Given user is on the enrollment page
    And user has completed start aplication page
    And user has completed payment plan step

 @sep25-1
    Scenario Outline: Verify that an error message is displayed when the card number is too short
        When user enters "<shortCardNumber>" as card number
        And user clicks the terms and conditions box
        Then the error message "Your card number is incomplete." should be displayed

        Examples:
            | shortCardNumber |
            | 12345678        |
            | 1234567890      |

    @sep25-2
    Scenario Outline: Verify that an error message is displayed when the card number is wrong
        When user enters "<wrongCardNumber>" as card number
        And user clicks the terms and conditions box
        Then the error message "Your card number is invalid." should be displayed

        Examples:
            | wrongCardNumber  |
            | 1111111111111111 |
            | 2222222222222222 |