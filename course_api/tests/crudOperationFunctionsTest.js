const { expect } = require('chai');

const crudOperation = require('../config/crudOperation');

describe('Course Operations', () => {
    it('Gets all the courses', async () => {
        const result = await crudOperation.readCourse();
        expect(result).to.deep.equal({
            error: null,
            data: [
                {
                    "courseId": "CH1",
                    "courseTitle": "Title",
                    "courseDescp": "descp",
                    "courseType": "free",
                    "courseCategory": "AI"
                },
                {
                    "courseId": "CH2",
                    "courseTitle": "Title",
                    "courseDescp": "descp",
                    "courseType": "free",
                    "courseCategory": "AI"
                }
            ]
        });
    });

    it('Gets the details about single course', async () => {
        const result = await crudOperation.readRowCourse('CH1');
        expect(result).to.deep.equal({
            error: null,
            data: {
                "courseId": "CH1",
                "courseTitle": "Title",
                "courseDescp": "descp",
                "courseType": "free",
                "courseCategory": "AI"
            }
        });
    });

    it('Creates a new course', async () => {
        const req = {
            body:{
                "courseId": "CHtest",
                "courseTitle": "TitleTest",
                "courseDescp": "descpTest",
                "courseType": "freeTest",
                "courseCategory": "AItest",
            },
        };
        const result = await crudOperation.createRowCourse(req.body);
        expect(result).to.deep.equal({
            error: null,
            data: {
                "courseId": "CHtest",
                "courseTitle": "TitleTest",
                "courseDescp": "descpTest",
                "courseType": "freeTest",
                "courseCategory": "AItest",
            },
        });

    });

    it('Updates a course', async () => {
        const req = {
            body: {
                "courseId": "CHtest2",
                "courseTitle": "TitleTest2",
                "courseDescp": "descpTest2",
            },
        };
        const result = await crudOperation.updateRowCourse('CHtest', req.body);
        expect(result).to.deep.equal({
            error: null,
            data: {
                "courseId": "CHtest2",
                "courseTitle": "TitleTest2",
                "courseDescp": "descpTest2",
                "courseType": "freeTest",
                "courseCategory": "AItest",
            },

        });
    });

    it('Deletes a course', async () => {
        const result = await crudOperation.deleteRowCourse('CHtest2')
        expect(result).to.deep.equal({
            error: null,
            data: {
                message: "CHtest2 deleted",
            },
        });
    });

    
});