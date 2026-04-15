import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given('Given user navigates to the start and refund dates enrollment page', async function () {
    await startApplicationPage.login();
});

Then('the program start date is displayed', async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the program refund date is displayed', async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then('the program start date is correct', async function () {
    const startDate = await startApplicationPage.programStartDate.innerText();
    expect(startDate).toBe(productInfo.startDate);
    console.log("Program Start Date: " + startDate);

});

Then('the program refund date is correct', async function () {
    const refundDate = await startApplicationPage.refundEndDate.innerText();
    expect(refundDate).toBe(productInfo.refundDate);
    console.log("Program Refund Date: " + refundDate);
});