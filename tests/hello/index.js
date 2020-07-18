const request = require('supertest');

it('should return hello world', async done => {
    await request(strapi.server) // app server is an instance of Class: http.Server
        .get('/products/hello')
        .expect(200) // Expect response http code 200
        .then(data => {
            expect(data.text).toBe('Hello World!'); // expect the response text
        });
    done();
});
