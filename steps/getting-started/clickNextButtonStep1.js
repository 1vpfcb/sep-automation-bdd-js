import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { userInfo } from "../../utilities/qa-data-reader.js";




// scenario 1
When('the user enters valid information in all fields on step {int}', async function (stepNumber) {
    await startApplicationPage.enterFirstName(userInfo.firstName);
    await startApplicationPage.enterLastName(userInfo.lastName);
    await startApplicationPage.enterEmail(userInfo.email);
    await startApplicationPage.enterPhoneNumber(userInfo.phoneNumber);
    await startApplicationPage.selectHowDidYouHearAboutUs(userInfo.howDidYouHearAboutUs);
});

// scenario 2, lets fucking work already, nigga)
When('the user enters valid information in required fields on step {int}', async function (stepNumber) {
    await startApplicationPage.enterFirstName(userInfo.firstName);
    await startApplicationPage.enterLastName(userInfo.lastName);
    await startApplicationPage.enterEmail(userInfo.email);
    await startApplicationPage.enterPhoneNumber(userInfo.phoneNumber);
    // Not selecting "How did you hear about us?" to leave it empty as it's optional    
});

// reusable next button step (shared by Scenario 1 & 2)
When('the user clicks on the Next button', async function () {
    await startApplicationPage.clickNextButton();
});

// only defined this ONCE. (Shared by Scenario 1 & 2)
Then('the user should be taken to step {int}', async function (stepNumber) {
    await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});