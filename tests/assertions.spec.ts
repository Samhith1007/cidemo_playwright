import { test, expect } from '@playwright/test';

test('Assertion Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()

    // ASSERTIONS 
    // check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }

    // visible or not

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()

    //  await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    // enabled or disabled

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    //  await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // check text

    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('Kitchen')
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('Kitchen')

    //check attribute value

    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    await page.pause()

    await expect(page).toHaveURL(/.*kitchen.applitools.com/);
    await page.pause()

    // visual validation 

    await expect(page).toHaveScreenshot()



});