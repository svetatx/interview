import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { Button } from "../page-factory/button";

export class Header {
	public loginButton: Button;
	public productsButton: Button;

	constructor(public page: Page) {
		this.loginButton = new Button({
			page,
			locator: '[href="/login"]',
			name: "Signup / Login",
		});
		this.productsButton = new Button({
			page,
			locator: '[href="/products"]',
			name: "Products",
		});
	}

	async verifyLoggedInAs(name: string): Promise<void> {
		await expect(this.page.locator("#header")).toContainText(
			`Logged in as ${name}`,
		);
	}
}
