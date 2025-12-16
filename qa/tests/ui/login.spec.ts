import { EMAIL, NAME, PASSWORD } from "../data/test-data";
import { test } from "../tests";

test("login user", async ({
	loginPage,
	createUserViaApi,
	deleteUserViaApi,
}) => {
	await loginPage.login(EMAIL, PASSWORD);
	await loginPage.verifySuccessfulLogin(NAME);
});
