Feature('Remove item');

Scenario('Ask before removing item', ({I}) => {
    I.amOnPage('/s/1');
    I.click('Product 4');
    I.click('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.makeStyles-docked-206.makeStyles-noShadow-207.MuiButton-containedPrimary.MuiButton-containedSizeLarge.MuiButton-sizeLarge');
    I.amOnPage('/cart');
    I.click('.MuiButtonBase-root.MuiIconButton-root.makeStyles-remove-118');
    I.see('Are you sure that you want to remove selected item?');
});