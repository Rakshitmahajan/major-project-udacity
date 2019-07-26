const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('READ /readImage', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/readImage')
            .send({
                title: 'test_image',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});