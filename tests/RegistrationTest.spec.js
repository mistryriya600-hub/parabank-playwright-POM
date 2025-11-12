import { test, expect } from '@playwright/test';
import { Common_Page } from '../Pages/Common_Page.js';
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
});
