import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { start } from "repl";

Given('the customer is viewing the checkout process', async function () {
    await startApplicationPage.login();
});

When('the stepper is displayed', async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toBeVisible();
});

Then('the steps should appear as {string}, {string}, and {string}', async function (step1, step2, step3) {
    
    await expect(startApplicationPage.startApplicationText).toHaveText(step1);
    await expect(startApplicationPage.paymentPlanText).toHaveText(step2);
    await expect(startApplicationPage.reviewText).toHaveText(step3);
});

Then('{string} should be highlighted in blue', async function (activeStep) {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS("background-color", "rgb(1, 201, 255)"); // Assuming blue is represented as rgb(0, 0, 255)
});

Then('{string} and {string} should be displayed in grey', async function (inactiveStep1, inactiveStep2) {
    await expect(startApplicationPage.paymentPlanText).toHaveCSS("color", "rgb(130, 154, 177)");
    await expect(startApplicationPage.reviewText).toHaveCSS("color", "rgb(130, 154, 177)");
});