import { expect } from "@playwright/test";
import {
	ADDRESS,
	CITY,
	COMPANY,
	COUNTRY,
	DOB_DAY,
	DOB_MONTH,
	DOB_YEAR,
	EMAIL,
	FIRST_NAME,
	LAST_NAME,
	MOBILE_NUMBER,
	NAME,
	PASSWORD,
	STATE,
	TITLE,
	ZIPCODE,
} from "../data/test-data";
import { test } from "../tests";

test("register user via API", async ({ request, deleteUserViaApi }) => {
	const data = {
		name: NAME,
		email: EMAIL,
		password: PASSWORD,
		title: TITLE,
		birth_date: DOB_DAY,
		birth_month: DOB_MONTH,
		birth_year: DOB_YEAR,
		firstname: FIRST_NAME,
		lastname: LAST_NAME,
		company: COMPANY,
		address1: ADDRESS,
		country: COUNTRY,
		zipcode: ZIPCODE,
		state: STATE,
		city: CITY,
		mobile_number: MOBILE_NUMBER,
	};

	const response = await request.post("/api/createAccount", {
		form: data,
	});

	expect(response.status()).toBe(200);
	const responseJson = await response.json();
	expect(responseJson.responseCode).toBe(201);
});
