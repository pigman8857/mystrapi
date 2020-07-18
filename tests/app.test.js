const fs = require('fs');
const { setupStrapi } = require('./helpers/strapi');

// We're setting timeout because sometimes bootstrap can take 5-7 seconds (big apps)
//jest.setTimeout(10000);

/** this code is called once before any test is called */
beforeAll(async done => {
    await setupStrapi(); // singleton so it can be called many times
    done();
});


it('strapi is defined', async done => {
    expect(strapi).toBeDefined();
    done();
});

require('./hello');
