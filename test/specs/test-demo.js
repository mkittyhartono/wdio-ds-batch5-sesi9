describe('Test Sauce Demo', () => {
    it('Test 1 - Login Successfully',async () => {
        await browser.url('https://www.saucedemo.com/');

        const userName = await browser.$("#user-name");
        const password = await browser.$("#password");
        const loginButton = await browser.$('//input[@type="submit"]');

        await userName.setValue("problem_user");
        await password.setValue("secret_sauce");
        await loginButton.click();

        await browser.pause(5000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');
        // assert.equal(await browser.getUrl(), "https://www.saucedemo.com/inventory.html");
    });
    
    it('Test 2 - Add to Cart',async () => {
        await browser.url('https://www.saucedemo.com/inventory.html');

        const addToCartButton = await browser.$('//button[@data-test="add-to-cart-sauce-labs-backpack"]');
        const addToCartButton2 = await browser.$('//a[@data-test="shopping-cart-link"]');
        
        await addToCartButton.click();
        await addToCartButton2.click();

        await browser.pause(5000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(browser).toHaveTitle('Swag Labs');
        
    });
});