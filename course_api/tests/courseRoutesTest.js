const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('GET /course/table', () => {
    it('responds with json', (done) => {
        superTest(app)
            .get('/course/table')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});