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
	NAME,
	PASSWORD,
	STATE,
	TITLE,
	UPDATED_MOBILE_NUMBER,
	ZIPCODE,
} from "../data/test-data";
import { test } from "../tests";

test("update user via API", async ({
	request,
	createUserViaApi,
	deleteUserViaApi,
}) => {
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
		mobile_number: UPDATED_MOBILE_NUMBER,
	};

	const response = await request.put("/api/updateAccount", {
		form: data,
	});

	expect(response.status()).toBe(200);
});
