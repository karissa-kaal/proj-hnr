Feature('add to cart');

Scenario('add product to cart successfully', ({ I }) => {
    I.amOnPage('/s/1');
    I.click('Product 1');
    I.click('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-docked-206.makeStyles-noShadow-207.MuiButton-containedPrimary.MuiButton-containedSizeLarge.MuiButton-sizeLarge');
    I.see('Item added to cart');
});
