import { expect } from '@playwright/test';
export class Common_Page{

    constructor(page) {
    this.page = page;
  }

    async OpenApplication(){
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
        //Title Validation
        await expect(this.page).toHaveTitle("ParaBank | Welcome | Online Banking");
    }

    async Valiade(){

    }
}