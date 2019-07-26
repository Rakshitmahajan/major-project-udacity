const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('UPDATE /updateVideo', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/updateVideo')
            .send({
                title: 'test_video',
                link:'https://www.youtube.com/watch?v=4tWJ_SpuqWQ',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});