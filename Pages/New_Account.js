import { locators } from "../Utils/Locaters.js";

export class New_Account{
    constructor(page){
        this.page = page;
        this.New_Open_Account_link = locators.NewAccount.New_Open_Account_link;
        this.Account_Type_Opt = locators.NewAccount.Account_Type_Opt;
        this.Account_Number_opt = locators.NewAccount.Account_Number_opt;
        this.Open_New_Account_btn = locators.NewAccount.Open_New_Account_btn;
    }

    async Open_Account_Link(){
        await this.page.click(this.New_Open_Account_link);
    }

    async New_Account_Detail(){
        await this.page.waitForSelector(this.Account_Type_Opt, { state: "visible" });
        await this.page.locator(this.Account_Type_Opt).selectOption("CHECKING");
        await this.page.locator(this.Account_Number_opt).selectOption({index:0});
    }

    async Open_Account_Btn(){
        await this.page.click(this.Open_New_Account_btn);
    }
}