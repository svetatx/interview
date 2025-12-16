import { expect, type Locator, type Page } from "@playwright/test";
import { Button } from "../page-factory/button";
import { Input } from "../page-factory/input";
import { Select } from "../page-factory/select";

type UserRegistrationData = {
	email: string;
	password: string;
	day: string;
	month: string;
	year: string;
	firstName: string;
	lastName: string;
	address: string;
	country: string;
	state: string;
	city: string;
	zipcode: string;
	mobileNumber: string;
};

type SignupData = {
	name: string;
	email: string;
};

export class SignupForm {
	private readonly signupName: Input;
	private readonly signupEmail: Input;
	private readonly signupButton: Button;
	private readonly password: Input;
	private readonly daySelect: Select;
	private readonly monthSelect: Select;
	private readonly yearSelect: Select;
	private readonly firstName: Input;
	private readonly lastName: Input;
	private readonly address: Input;
	private readonly countrySelect: Select;
	private readonly state: Input;
	private readonly city: Input;
	private readonly zipcode: Input;
	private readonly mobileNumber: Input;
	private readonly createAccountButton: Button;

	constructor(public page: Page) {
		this.signupName = new Input({
			page,
			locator: '[data-qa="signup-name"]',
			name: "Signup Name",
		});
		this.signupEmail = new Input({
			page,
			locator: '[data-qa="signup-email"]',
			name: "Signup Email Address",
		});
		this.signupButton = new Button({
			page,
			locator: '[data-qa="signup-button"]',
			name: "Signup",
		});
		this.password = new Input({
			page,
			locator: "#password",
			name: "Password",
		});
		this.daySelect = new Select({
			page,
			locator: "#days",
			name: "Day of Birth",
		});
		this.monthSelect = new Select({
			page,
			locator: "#months",
			name: "Month of Birth",
		});
		this.yearSelect = new Select({
			page,
			locator: "#years",
			name: "Year of Birth",
		});
		this.firstName = new Input({
			page,
			locator: "#first_name",
			name: "First Name",
		});
		this.lastName = new Input({
			page,
			locator: "#last_name",
			name: "Last Name",
		});
		this.address = new Input({
			page,
			locator: "#address1",
			name: "Address",
		});
		this.countrySelect = new Select({
			page,
			locator: "#country",
			name: "Country",
		});
		this.state = new Input({
			page,
			locator: "#state",
			name: "State",
		});
		this.city = new Input({
			page,
			locator: "#city",
			name: "City",
		});
		this.zipcode = new Input({
			page,
			locator: "#zipcode",
			name: "Zipcode",
		});
		this.mobileNumber = new Input({
			page,
			locator: "#mobile_number",
			name: "Mobile Number",
		});
		this.createAccountButton = new Button({
			page,
			locator: '[data-qa="create-account"]',
			name: "Create Account",
		});
	}

	async fillSignupForm({ name, email }: SignupData): Promise<void> {
		await this.signupName.fill(name, { validateValue: true });
		await this.signupEmail.fill(email, { validateValue: true });
		await this.signupButton.click();
	}

	async fillRegistrationForm({
		password,
		day,
		month,
		year,
		firstName,
		lastName,
		address,
		country,
		state,
		city,
		zipcode,
		mobileNumber,
	}: UserRegistrationData): Promise<void> {
		await this.password.fill(password, { validateValue: true });
		await this.daySelect.selectOption(day);
		await this.monthSelect.selectOption(month);
		await this.yearSelect.selectOption(year);
		await this.firstName.fill(firstName, { validateValue: true });
		await this.lastName.fill(lastName, { validateValue: true });
		await this.address.fill(address, { validateValue: true });
		await this.countrySelect.selectOption(country);
		await this.state.fill(state, { validateValue: true });
		await this.city.fill(city, { validateValue: true });
		await this.zipcode.fill(zipcode, { validateValue: true });
		await this.mobileNumber.fill(mobileNumber, { validateValue: true });
	}

	async createAccount(): Promise<void> {
		await this.createAccountButton.click();
	}

	async completeRegistration(
		registrationData: UserRegistrationData,
	): Promise<void> {
		await this.fillRegistrationForm(registrationData);
		await this.createAccount();
	}
}

export class AccountCreated {
	private readonly successMessage: Locator;
	private readonly continueButton: Button;

	constructor(public page: Page) {
		this.successMessage = page.locator('[data-qa="account-created"]');
		this.continueButton = new Button({
			page,
			locator: '[data-qa="continue-button"]',
			name: "Continue",
		});
	}

	async verifyAccountCreated(): Promise<void> {
		await expect(this.successMessage).toContainText("Account Created!");
	}

	async clickContinue(): Promise<void> {
		await this.continueButton.click();
	}
}
