const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('POST /studentLogin', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/studentLogin')
            .send({
                email: 'rakshit@gmail.com',
                password: 'pass',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});