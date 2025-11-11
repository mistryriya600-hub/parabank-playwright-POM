import { locators } from "../Utils/Locaters.js";
import { expect } from '@playwright/test';

export class Registration_Page {

  constructor(page, data) {
    this.page = page;
    this.data = data;
    this.firstNameInput = locators.Registration.firstNameInput;
    this.lastNameInput = locators.Registration.lastNameInput;
    this.addressInput = locators.Registration.addressInput;
    this.cityInput = locators.Registration.cityInput;
    this.stateInput = locators.Registration.stateInput;
    this.zipCodeInput = locators.Registration.zipCodeInput;
    this.phoneInput = locators.Registration.phoneInput;
    this.ssnInput = locators.Registration.ssnInput;
    this.usernameInput = locators.Registration.usernameInput;
    this.passwordInput = locators.Registration.passwordInput;
    this.confirmPasswordInput = locators.Registration.confirmPasswordInput;
  }

  async Registration_Detail() {
    const data = this.data;
    await this.page.fill(this.firstNameInput, data.firstName);
    await this.page.fill(this.lastNameInput, data.lastName);
    await this.page.fill(this.addressInput, data.address);
    await this.page.fill(this.cityInput, data.city);
    await this.page.fill(this.stateInput, data.state);
    await this.page.fill(this.zipCodeInput, data.zipCode);
    await this.page.fill(this.phoneInput, data.phone);
    await this.page.fill(this.ssnInput, data.ssn);
    await this.page.fill(this.usernameInput, data.username);
    await this.page.fill(this.passwordInput, data.password);
    await this.page.fill(this.confirmPasswordInput, data.confirmPassword);
  }

  async getSuccessMessage() {
    // Validate registration success
     const successMsg = this.page.locator('h1.title');
     await expect(successMsg).toBeVisible();
     console.log(await successMsg.textContent());
} 
}
