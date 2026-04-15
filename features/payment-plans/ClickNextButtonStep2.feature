@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria
    Background:
        Given user is on the enrollment page
        And user has completed start aplication page

    @sep16-1
    # Scenario: Verify that clicking upfront payment plan should activate the next button
    #     Then the next button is disabled by default
    #     When a user selects upfront payment plan
    #     And the next button is enabled

    # @sep16-2
    # Scenario: Verify that clicking on installments payment plan activates the next button
    #     Then the next button is disabled by default
    #     When a user selects installments payment plan activate the next button
    #     And the next button is enabled

    Scenario Outline: Verify that clicking on any payment plan activates the next button
        Then the next button is disabled by default
        When a user selects "<paymentPlan>" plan
        And the next button is enabled
        Examples:
            | paymentPlan  |
            | upfront      |
            | installments |

    @sep16-2
    Scenario Outline: Verify after clicking on the next button, the stepper color is blue
        When a user selects "<paymentPlan>" plan
        And the user clicks on the next button
        Then the Step 3 circle is blue
        And the Step 1 and Step 2 circles are green

        Examples:
            | paymentPlan  |
            | upfront      |
            | installments |

    @sep16-3
    Scenario: Verify that the payment summary is displayed
        When a user selects "upfront" plan
        Then the upfront payment summary is displayed
        When a user selects "installments" plan
        Then the installments payment summary is displayed

    @sep16-4
    Scenario: Verify that the back button is displayed and enabled
        Then the back button is displayed and enabled
        When the user clicks on the back button
        Then the step 1 circle is blue


    

