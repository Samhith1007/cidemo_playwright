import { test, expect, chromium } from '@playwright/test';

test('Login Test1', async ({ }) => {

    const browser = await chromium.launch({ headless: false });

    //browser context 1
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    //browser context2
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    //browser 1
    await page1.goto('https://demo.applitools.com/')
    //await page1.pause()
    await page1.locator('#username').click();
    await page1.locator('[placeholder="Enter your username"]').fill('sam');
    await page1.locator('//input[@id="password"]').click();
    await page1.locator('input[type="password"]').fill('sam');
    await page1.locator('text=Sign in').click();


    //browser 2
    await page2.goto('https://demo.applitools.com/')
    //await page1.pause()
    await page2.getByRole('textbox', { name: 'Enter your username' }).click();
    await page2.getByRole('textbox', { name: 'Enter your username' }).fill('saki');
    await page2.getByRole('textbox', { name: 'Enter your password' }).click();
    await page2.getByRole('textbox', { name: 'Enter your password' }).fill('saki');
    await page2.getByRole('link', { name: 'Sign in' }).click();

    await context1.close();
    await context2.close();

    browser.close();
});