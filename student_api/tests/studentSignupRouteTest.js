const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('POST /studentSignup', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/studentSignup')
            .send({
                firstName: 'jhakjab',
                lastName: 'jkabkja',
                email: 'mjbkj@gmail.com',
                phoneNumber: '8992996732',
                password: 'passs',
                password2: 'passs',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});