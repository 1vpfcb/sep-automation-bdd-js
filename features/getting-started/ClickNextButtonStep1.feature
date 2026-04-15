@sep19
Feature: Click on the next button on step 1

  As a customer, I should be able to click on the next button on step 1 when I give valid information.

  Background:
    Given user is on the enrollment page

  Scenario: Move to step 2 when all fields are filled with valid information
    When the user enters valid information in all fields on step 1
    And the user clicks on the Next button
    Then the user should be taken to step 2

  Scenario: Move to step 2 when only required fields are filled with valid information
    When the user enters valid information in required fields on step 1
    And the user clicks on the Next button
    Then the user should be taken to step 2