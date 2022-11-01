// const frisby = require('frisby');

// it('should be a teapot', function () {
//     return frisby.get('http://httpbin.org/status/418')
//         .expect('status', 418);
// });

//https://teammatesv4.appspot.com/web/instructor/students

const frisby = require('frisby');

// it('should return status code 200', function () {
//     return frisby.get('https://teammatesv4.appspot.com/web/instructor/students')
//         .expect('status', 200)
// });

//const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exports Joi for convenience on type assersions

// it('should return a status of 200', function () {
//     return frisby
//         .get('https://jsonfeed.org/feed.json')
//         .expect('status', 200)
//         .expect('json', 'version', 'https://jsonfeed.org/version/1')
//         .expect('json', 'title', 'JSON Feed')
//         .expect('jsonTypes', 'items.*', { // Assert *each* object in 'items' array
//             'id': Joi.string().required(),
//             'url': Joi.string().uri().required(),
//             'title': Joi.string().required(),
//             'date_published': Joi.date().iso().required(),
//         });
// });

it('should return a status of 200', function () {
    return frisby
        .get('https://teammatesv4.appspot.com/ngsw.json?ngsw-cache-bust=0.016910565025094693')
        .expect('status', 200)
        .expect('json', 'timestamp', '1659584998762')
        .expect('json', 'configVersion', '1')
        .expect('json', 'index', '/index.html')
        .expectNot('status', 404)
        // .expect('json', 'Referrer Policy', 'strict-origin-when-cross-origin')
        .expect('jsonTypes', 'assetGroups.*', {
            'name': Joi.string().required(),
            'installMode': Joi.string().required(),
            'updateMode': Joi.string().required(),
            'ignoreVary': Joi.boolean(),
            'patterns': Joi.array().items().empty(Joi.array().length(0))
        })
        .expect('jsonTypes', 'assetGroups.[0]', {
            'name': 'app',
            'installMode': 'prefetch'
        })
        .expect('jsonTypes', 'assetGroups.[1]', {
            'name': 'assets',
            'installMode': 'lazy',
            'urls.*': Joi.array().items()
        })

    // .expect('json', 'version', 'https://jsonfeed.org/version/1')
    // .expect('json', 'title', 'JSON Feed')
    // .expect('jsonTypes', 'items.*', { // Assert *each* object in 'items' array
    //     'id': Joi.string().required(),
    //     'url': Joi.string().uri().required(),
    //     'title': Joi.string().required(),
    //     'date_published': Joi.date().iso().required(),
    //});
});

// const todoApi = 'https://teammatesv4.appspot.com/webapi/auth';

// it('should return something', function () {
//     return frisby.get(todoApi)
//         .then((response) => {
//             expect(response.json[0].id).toBe('l201156@lhr.nu.edu.pk');
//             expect(response.json[0].isAdmin).toBe(false);
//             // and so on
//         });
// });
