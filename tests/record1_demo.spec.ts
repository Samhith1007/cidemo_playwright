import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {

  // await page.route('**/*', async (route, request) => {
  //   console.log(`>> ${request.method()} ${request.url()}`);
  //   await route.continue();
  // });

  await page.route('**/*', async (route, request) => {
    if (request.resourceType() === 'script') {
      await route.abort();
    } else {
      await route.continue();
    }
  });

  //await page.route('**/*.png', route => route.abort());

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});