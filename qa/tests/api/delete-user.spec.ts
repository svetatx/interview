import { expect } from "@playwright/test";
import { EMAIL, PASSWORD } from "../data/test-data";
import { test } from "../tests";

test("delete user account", async ({ request, createUserViaApi }) => {
	const data = {
		email: EMAIL,
		password: PASSWORD,
	};

	const response = await request.delete("/api/deleteAccount", {
		form: data,
	});

	expect(response.status()).toBe(200);
});
