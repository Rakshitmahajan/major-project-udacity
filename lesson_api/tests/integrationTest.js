const superTest = require('supertest');

const { expect } = require('chai');

const app = require('../index');

describe('GET /lesson/table', () => {
    it('responds with json', (done) => {
        superTest(app)
            .get('/lesson/table/CH5')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('responds with json', (done) => {
        superTest(app)
            .get('/lesson/CHmain_L1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('adds a lesson', (done) => {
        superTest(app)
            .post('/lesson')
            .send({
                body:{
                    "courseId": "CH1",
                    "lessonId": "test",
                    "lessonNumber": "1",
                    "lessonTitle": "something",
                    "lessonDescp": "something something",
                    "lessonImage":"ascadss"
                },
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('deletes a lesson', (done) => {
        superTest(app)
            .delete('/lesson/test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});