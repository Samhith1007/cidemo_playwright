import { test, expect } from '@playwright/test';

test('Demo Login Test1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
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

test('Demo Login Test2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();
    await page.locator('input[name="username"]').click();
    await page.locator('//input[ @placeholder="Username"]').fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('paragraph').filter({ hasText: 'Cody Ethan' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();


});

test('Demo Login Test3', async ({ page }) => {

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.pause();
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.locator('span').nth(1).click();
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('checkbox', { name: 'Remember me?' }).check();
    await page.getByRole('button', { name: 'Log in' }).click();

});