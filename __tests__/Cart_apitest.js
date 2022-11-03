const frisby = require('frisby');

const Joi = frisby.Joi; 

it('open cart page', function () {
    return frisby.get('http://localhost:3000/api/cart?__v__=development')
    .expect('status', 200)
    .expect('json', 'pageData', {'title' : 'My Cart'})
    .expect('json', 'pageData', {'breadcrumbs' : [{"text":"Home","href":"/"}]})
  });
