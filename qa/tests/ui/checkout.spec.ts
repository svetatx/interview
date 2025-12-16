import { expect } from "@playwright/test";
import {
	CARD_NUMBER,
	CVC,
	EXPIRY_MONTH,
	EXPIRY_YEAR,
	NAME_ON_CARD,
} from "../data/checkout-data";
import { EMAIL, NAME, PASSWORD } from "../data/test-data";
import { test } from "../tests";

test("checkout product", async ({
	page,
	createUserViaApi,
	deleteUserViaApi,
	loginPage,
}) => {
	await loginPage.login(EMAIL, PASSWORD);
	await loginPage.verifySuccessfulLogin(NAME);

	await loginPage.header.productsButton.click();

	// TODO: Need to be refactored
	await page.locator('[href="/product_details/1"]').click();
	await page.waitForURL("**/product_details/1");
	await page.locator('[class="btn btn-default cart"]').click();
	await page.getByText("View Cart").click();
	await page.locator('[class="btn btn-default check_out"]').click();
	await page.locator('[href="/payment"]').click();
	await page.locator('[name="name_on_card"]').fill(NAME_ON_CARD);
	await page.locator('[data-qa="card-number"]').fill(CARD_NUMBER);
	await page.locator('[data-qa="cvc"]').fill(CVC);
	await page.locator('[data-qa="expiry-month"]').fill(EXPIRY_MONTH);
	await page.locator('[data-qa="expiry-year"]').fill(EXPIRY_YEAR);
	await page.locator("#submit").click();
	await expect(page.locator('[data-qa="order-placed"]')).toContainText(
		"Order Placed!",
	);
});
