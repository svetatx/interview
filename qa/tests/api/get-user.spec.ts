import { expect } from "@playwright/test";
import { EMAIL } from "../data/test-data";
import { test } from "../tests";

test("get user by email", async ({
	request,
	createUserViaApi,
	deleteUserViaApi,
}) => {
	const data = { email: EMAIL };
	const response = await request.get("/api/getUserDetailByEmail", {
		params: data,
	});

	expect(response.status()).toBe(200);
});
