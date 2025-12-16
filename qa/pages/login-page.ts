import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
	async login(email: string, password: string): Promise<void> {
		await this.visit("/login");
		await this.loginForm.asUser({ email, password });
	}

	async verifySuccessfulLogin(name: string): Promise<void> {
		await this.header.verifyLoggedInAs(name);
	}
}
