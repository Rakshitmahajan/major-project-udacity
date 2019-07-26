const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('DELETE /deleteVideo', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/deleteVideo')
            .send({
                title: 'test_video',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});