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
} from "../data/test-data";
import { test } from "../tests";

test("register user", async ({ registerPage, deleteUserViaApi }) => {
	await registerPage.visit("/login");
	await registerPage.signUpForm.fillSignupForm({ name: NAME, email: EMAIL });
	await registerPage.signUpForm.fillRegistrationForm({
		password: PASSWORD,
		day: DOB_DAY,
		month: DOB_MONTH,
		year: DOB_YEAR,
		firstName: FIRST_NAME,
		lastName: LAST_NAME,
		address: ADDRESS,
		country: COUNTRY,
		state: STATE,
		city: CITY,
		zipcode: ZIPCODE,
		mobileNumber: MOBILE_NUMBER,
	});
	await registerPage.signUpForm.createAccount();
	await registerPage.accountCreated.verifyAccountCreated();
	await registerPage.accountCreated.clickContinue();
});
