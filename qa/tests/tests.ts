import { test as base, expect } from "@playwright/test";
import {
	type ExercisePagesFixture,
	exercisePagesFixture,
} from "../fixtures/exercise-pages";
import {
	ADDRESS,
	CITY,
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
	ZIPCODE,
} from "./data/test-data";

type AllFixtures = ExercisePagesFixture & {
	createUserViaApi: () => Promise<void>;
	deleteUserViaApi: () => Promise<void>;
};

export const test = base.extend<AllFixtures>({
	...exercisePagesFixture,
	createUserViaApi: async ({ request }, use) => {
		const response = await request.post("/api/createAccount", {
			form: {
				name: NAME,
				email: EMAIL,
				password: PASSWORD,
				title: "Mr",
				birth_date: DOB_DAY,
				birth_month: DOB_MONTH,
				birth_year: DOB_YEAR,
				firstname: FIRST_NAME,
				lastname: LAST_NAME,
				company: "Test Company",
				address1: ADDRESS,
				address2: "",
				country: COUNTRY,
				zipcode: ZIPCODE,
				state: STATE,
				city: CITY,
				mobile_number: MOBILE_NUMBER,
			},
		});

		const responseBody = await response.text();
		expect(response.status()).toBe(200);
		expect(responseBody).toContain("User created!");

		await use();
	},

	deleteUserViaApi: async ({ request }, use) => {
		await use();

		const response = await request.delete("/api/deleteAccount", {
			form: {
				email: EMAIL,
				password: PASSWORD,
			},
		});

		const responseBody = await response.text();

		expect(response.status()).toBe(200);
		expect(responseBody).toContain("Account deleted!");
	},
});
