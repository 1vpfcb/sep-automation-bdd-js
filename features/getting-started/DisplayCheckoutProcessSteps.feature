@sep08
Feature: Display the steps of the checkout process
    As a customer, I should be able to know where I am in the checkout process using the stepper.

    Background:
        Given the customer is viewing the checkout process

    Scenario: Show all checkout steps in order
        When the stepper is displayed
        Then the steps should appear as "Start Application", "Payment plan", and "Review"

    Scenario: Highlight the current checkout step
        When the stepper is displayed
        Then "Start Application" should be highlighted in blue

    Scenario: Show upcoming checkout steps in a muted style
        When the stepper is displayed
        Then "Payment Plan" and "Review" should be displayed in grey