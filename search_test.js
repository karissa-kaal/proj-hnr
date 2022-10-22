Feature('search');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.click('.RSFSearchField-root-79');
    I.click('Category 1');
    I.see('Subcategory 1', 'h1');

});
