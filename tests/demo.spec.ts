import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://demo.playwright.dev/todomvc/#/
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Fill [placeholder="What\ needs\ to\ be\ done\?"]
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').fill('just a simple test');

  // Press Enter
  await page.locator('[placeholder="What\\ needs\\ to\\ be\\ done\\?"]').press('Enter');

});