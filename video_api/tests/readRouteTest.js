const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('READ /readVideo', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/readVideo')
            .send({
                title: 'test_video',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});