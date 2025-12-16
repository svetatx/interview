import type { Fixtures } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { RegisterPage } from "../pages/register-page";

export type ExercisePagesFixture = {
	loginPage: LoginPage;
	registerPage: RegisterPage;
};

export const exercisePagesFixture: Fixtures<ExercisePagesFixture> = {
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
	registerPage: async ({ page }, use) => {
		const registerPage = new RegisterPage(page);
		await use(registerPage);
	},
};
