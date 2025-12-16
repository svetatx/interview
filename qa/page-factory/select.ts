import test from "@playwright/test";
import type { LocatorProps } from "../types/page-factory/component";
import { Component } from "./component";

export class Select extends Component {
	get typeOf(): string {
		return "select";
	}

	async selectOption(
		value: string | { label?: string; value?: string; index?: number },
		locatorProps: LocatorProps = {},
	): Promise<void> {
		await test.step(`Selecting option "${typeof value === "object" ? value.value || value.label : value}" in ${this.typeOf} with name "${this.componentName}"`, async () => {
			const locator = this.getLocator(locatorProps);
			await locator.selectOption(value);
		});
	}
}
