import test, { type Page } from "@playwright/test";
import { Header } from "../components/header";
import { LoginForm } from "../components/login-form";
import { AccountCreated, SignupForm } from "../components/register-form";

export class BasePage {
	readonly header: Header;
	readonly loginForm: LoginForm;
	readonly accountCreated: AccountCreated;
	readonly signUpForm: SignupForm;

	constructor(public page: Page) {
		this.header = new Header(page);
		this.loginForm = new LoginForm(page);
		this.accountCreated = new AccountCreated(page);
		this.signUpForm = new SignupForm(page);
	}

	async visit(url: string): Promise<void> {
		await test.step(`Opening the url "${url}"`, async () => {
			await this.page.goto(url);
		});
	}

	async reload(): Promise<void> {
		const currentUrl = this.page.url();

		await test.step(`Reloading page with url "${currentUrl}"`, async () => {
			await this.page.reload({ waitUntil: "domcontentloaded" });
		});
	}
}
