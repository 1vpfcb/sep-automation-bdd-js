import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then('the next button is disabled by default', async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

When('a user selects {string} plan', async function (planType) {
    await paymentPlanPage.selectPaymentPlan(planType);
});

Then('the next button is enabled', async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

When('the user clicks on the next button', async function () {
    await paymentPlanPage.clickNextButton();
});

Then('the Step {int} circle is blue', async function (int) {
    await expect(paymentPlanPage.step3).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

Then('the Step {int} and Step {int} circles are green', async function (int, int2) {
    await expect(paymentPlanPage.step1).toHaveCSS("background-color", "rgb(172, 245, 138)");
    await expect(paymentPlanPage.step2).toHaveCSS("background-color", "rgb(172, 245, 138)");
});

Then('the upfront payment summary is displayed', async function () {
   await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
   await expect(paymentPlanPage.upfrontDiscountTextUnderUpfront).toBeVisible(); 
   await expect(paymentPlanPage.subtotalTextUnderUpfront).toBeVisible();
});

Then('the installments payment summary is displayed', async function () {
    await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.installmentsNumberUnderInstallments).toBeVisible(); 
    await expect(paymentPlanPage.pricePerInstallmentsAmountUnderInstallments).toBeVisible();
});

Then('the back button is displayed and enabled', async function () {
    await expect(paymentPlanPage.backButton).toBeVisible();
    await expect(paymentPlanPage.backButton).toBeEnabled();
});

When('the user clicks on the back button', async function () {
    await paymentPlanPage.backButton.click();
});
Then('the step {int} circle is blue', async function (int) {
    await expect(paymentPlanPage.step2).toHaveCSS("background-color", "rgb(1, 201, 255)");
});

