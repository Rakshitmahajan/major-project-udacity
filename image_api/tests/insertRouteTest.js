const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('INSERT /insertImage', () => {
    it('responds with json', (done) => {
        superTest(app)
            .post('/insertImage')
            .send({
                title: 'test_image',
                link:'http://www.muesdesign.com/wp-content/uploads/2015/04/TRY_ORANGE.jpg',
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});