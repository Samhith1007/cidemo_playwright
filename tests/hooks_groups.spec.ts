import { test, expect } from '@playwright/test';

test.describe('All My Tests', () => {



    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.goto('https://www.saucedemo.com/inventory.html');

    });

    // test.afterAll(async ({ page }) => {

    //     await page.close()
    // });


    test('homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="item-4-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="item-3-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await page.getByText('Get your testing superhero on').click();
        await page.locator('[data-test="item-1-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="remove"]').click();
        await page.locator('[data-test="back-to-products"]').click();


    });


    test('logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    });

});