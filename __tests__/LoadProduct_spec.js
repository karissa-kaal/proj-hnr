const frisby = require('frisby');
const Joi = frisby.Joi;

it('return product 1', function () {
  return frisby.get('http://localhost:3000/api/session?__v__=development')
  .expect('status', 200)
  .expect('json', 'name', 'Mark')
  .expect('json', 'email', 'mark@domain.com')
  .expect('json', 'cart', {'items': []})
  .expect('json', 'currency', 'USD')
});

