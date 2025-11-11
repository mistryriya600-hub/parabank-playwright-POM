import { test, expect } from '@playwright/test';
import { Common_Page } from '../Pages/Common_Page.js';
import { Registration_Page } from '../Pages/Registration_Page.js';
import { testData } from '../Utils/testData.js';
import { locators } from '../Utils/Locaters.js';

test('User should be able to register successfully', async ({ page }) => {
  // Open URL
  const commonPage = new Common_Page(page);
  await commonPage.OpenApplication();
  await page.waitForLoadState('networkidle');

  await page.click(locators.Registration.Registration_Link);

  // Fill registration details
  const registrationPage = new Registration_Page(page, testData.Registration_Detail);
  await registrationPage.Registration_Detail();

  // Click on Register
  await page.click(locators.Registration.registerBtn);

  // Validate registration success
  await registrationPage.getSuccessMessage();
});
