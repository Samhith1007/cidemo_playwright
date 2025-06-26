import { test, expect } from '@playwright/test';

test('Demo Login Test1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.locator('#username').click();
    await page.locator('[placeholder="Enter your username"]').fill('sam');
    await page.locator('//input[@id="password"]').click();
    await page.locator('input[type="password"]').fill('sam');
    // await page.getByRole('textbox', { name: 'Enter your username' }).click();
    // await page.getByRole('textbox', { name: 'Enter your username' }).fill('sam');
    // await page.getByRole('textbox', { name: 'Enter your password' }).click();
    // await page.getByRole('textbox', { name: 'Enter your password' }).fill('sam');
    // await page.getByRole('link', { name: 'Sign in' }).click();
    //  await page.pause();
    await page.locator('text=Sign in').click();
});
