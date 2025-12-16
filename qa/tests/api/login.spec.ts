import { expect } from "@playwright/test";
import { EMAIL, PASSWORD } from "../data/test-data";
import { test } from "../tests";

test("login user", async ({ request, createUserViaApi, deleteUserViaApi }) => {
	const data = {
		email: EMAIL,
		password: PASSWORD,
	};

	const response = await request.post("/api/verifyLogin", {
		form: data,
	});
	expect(response.status()).toBe(200);
});
