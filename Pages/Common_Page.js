import { expect } from '@playwright/test';
import { locators } from "../Utils/Locaters.js";
export class Common_Page{

    constructor(page, data) {
    this.page = page;
    this.data = data;
    this.Username_Input = locators.Login.Username_Input;
    this.Password_Input = locators.Login.Password_Input;
  }

    async OpenApplication(){
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
        //Title Validation
        await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
    }

    async Validate_User(){
      const data = this.data;
      await this.page.fill(this.Username_Input, data.Username);
      await this.page.fill(this.Password_Input, data.Password);
    }

    async Logout(){
      await this.page.click(locators.Login.logoutLink);
    }
}