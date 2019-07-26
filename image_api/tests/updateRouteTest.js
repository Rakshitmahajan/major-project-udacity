const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('UPDATE /updateImage', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/updateImage')
            .send({
                title: 'test_image',
                link:'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/68127/2012/06/97678-94350.jpg?itok=7zqwtnPQ',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});