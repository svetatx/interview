import type { Page } from "@playwright/test";
import { Button } from "../page-factory/button";
import { Input } from "../page-factory/input";

type UserCredentials = {
	email: string;
	password: string;
};

export class LoginForm {
	private readonly emailInput: Input;
	private readonly passwordInput: Input;
	private readonly loginButton: Button;

	constructor(public page: Page) {
		this.emailInput = new Input({
			page,
			locator: '[data-qa="login-email"]',
			name: "Email Adress",
		});
		this.passwordInput = new Input({
			page,
			locator: '[data-qa="login-password"]',
			name: "Password",
		});
		this.loginButton = new Button({
			page,
			locator: '[data-qa="login-button"]',
			name: "Login",
		});
	}

	async asUser({ email, password }: UserCredentials): Promise<void> {
		await this.emailInput.fill(email, { validateValue: true });
		await this.passwordInput.fill(password, { validateValue: true });
		await this.loginButton.click();
	}
}
