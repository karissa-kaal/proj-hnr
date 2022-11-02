const frisby = require('frisby');
const Joi = frisby.Joi;

it('Subcategory 1 should return status 200 and Subcategory 1 values', function(){
    return frisby.get('http://localhost:3000/api/s/1?__v__=development')
    .expect('status', 200)
    .expect('json', 'pageData', {
        id: ["1"],
        name: 'Subcategory 1',
        title: 'Subcategory 1',  
    });
});