import { test } from '@playwright/test'

test.skip('test1', async ({ page }) => {

})


test('not ready yet', async ({ page }) => {
    test.fail();
})

test.fixme('test to be fixes', async ({ page }) => {

})

test('test is slow', async ({ page }) => {
    test.slow();
    // triple the timeout time for execution of this particular test
})


//tags

test('test login page @smoke', async ({ page }) => {
    //..
})