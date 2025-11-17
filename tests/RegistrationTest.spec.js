import { test, expect } from '@playwright/test';
import { Common_Page } from '../Pages/Common_Page.js';
import { New_Account } from '../Pages/New_Account.js';
import { Registration_Page } from '../Pages/Registration_Page.js';
import { testData } from '../Utils/testData.js';
import { locators } from '../Utils/Locaters.js';


test('User should be able to register successfully', async ({ page }) => {
  // Open URL
  const commonPage = new Common_Page(page, testData.Login_Detail);
  //Open URL
  await commonPage.OpenApplication();
  await page.waitForLoadState('networkidle');

  //Title Validation
  await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");

  // Fill registration details
  const registrationPage = new Registration_Page(page, testData.Registration_Detail);
  //Click on Register Link
  await registrationPage.Register_Link();
  //Enter the Registration detail
  await registrationPage.Registration_Detail();
  // Click on Register
  await registrationPage.registerBtn();
  // Validate registration success
  await expect(page.locator('text=Your account was created successfully')).toBeVisible();


  //Logout
  await commonPage.Logout();
  //Login User
  await commonPage.Validate_User();
  await commonPage.Login();

  //New Account
  const NewAccount = new New_Account(page);
  //Click on the Open Account Link
  await NewAccount.Open_Account_Link();
  //Selecting the Account Option
  await NewAccount.New_Account_Detail();
  //Click on the Open Account button
  await NewAccount.Open_Account_Btn();
  await expect(page.locator("//p[normalize-space()='Congratulations, your account is now open.']")).toHaveText("Congratulations, your account is now open.");
});
