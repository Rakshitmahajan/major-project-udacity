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

describe('GET /course/id', () => {
    it('responds with json', (done) => {
        superTest(app)
            .get('/course/CH1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /course ', () => {
    it('adds a course', (done) => {
        superTest(app)
            .post('/course')
            .send({
                body:{
                    "courseId": "CHtestRoute",
                    "courseTitle": "TitleTestRoute",
                    "courseDescp": "descpTestRoute",
                    "courseType": "freeTestROute",
                    "courseCategory": "AItestRoute",
                },
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
  
describe('PUT /course/id', () => {
    it('updating a course', (done) => {
        superTest(app)
            .put('/course/CHtestRoute')
            .send({
                body:{
                    "courseId": "CHtestRoute2",
                    "courseTitle": "TitleTestRoute2",
                    "courseDescp": "descpTestRoute2",
                },
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
  
describe('DELETE /course/id ', () => {
    it('deletes a course', (done) => {
        superTest(app)
            .delete('/course/CHtestRoute2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});