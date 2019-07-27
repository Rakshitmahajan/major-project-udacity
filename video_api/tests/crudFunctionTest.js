const { expect } = require('chai');

const crudFunction = require("../config/crudFunction");

describe('Video Operations', () => {
    it('Inserts a video', async () => {
        const req = {
            body: {
                title: 'test_video',
                link: 'https://www.youtube.com/watch?v=4tWJ_SpuqWQ',

            },
        };
        const result = await crudFunction.insertVideo(req.body);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_video',
                link: 'https://www.youtube.com/watch?v=4tWJ_SpuqWQ',
            },
        });
    });

    it('Handles missing fields submission', async () => {
        const req = {
            body: {
                title: '',
                link: '',
            },
        };
        const result = await crudFunction.insertVideo(req.body);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

    it('Handles duplicate entry', async () => {
        const req = {
            body: {
                title: 'test_video',
                link: 'https://www.youtube.com/watch?v=4tWJ_SpuqWQ',
            },
        };
        const result = await crudFunction.insertVideo(req.body);
        expect(result).to.deep.equal({
            err: {
                message: 'already exist',
            },
            data: null,
        });
    });
});

describe('Reading a Video', () => {
    it('video found', async () => {
        const req = {
            body: {
                title: 'test_video',
            },
        };
        const result = await crudFunction.readVideo(req.body.title);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_video',
                link: 'https://www.youtube.com/watch?v=4tWJ_SpuqWQ',
            }
        });
    });

    it('video not found', async () => {
        const req = {
            body: {
                title: 'try_video',
            },
        };
        const result = await crudFunction.readVideo(req.body.title);
        expect(result).to.deep.equal({
            err: {
                message: 'video not found',
            },
            data: null,
        });
    });

    it('empty video path', async () => {
        const req = {
            body: {
                title: '',
            },
        };
        const result = await crudFunction.readVideo(req.body.title);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

});

describe('Deleting a Video', () => {
    it('video found', async () => {
        const req = {
            body: {
                title: 'test_video',
            },
        };
        const result = await crudFunction.deleteVideo(req.body.title);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_video',
                message: 'video deleted',
            },
        });
    });

    it('empty video path', async () => {
        const req = {
            body: {
                title: '',
            },
        };
        const result = await crudFunction.deleteVideo(req.body.title);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

});


describe('Updating a Video', () => {
    it('video found', async () => {
        const req = {
            body: {
                title: 'test_video',
                link: 'https://www.youtube.com/watch?v=RCzrSaaWd_0'
            },
        };
        const result = await crudFunction.updateVideo(req.body);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_video',
                link: 'https://www.youtube.com/watch?v=RCzrSaaWd_0',
            },
        });
    });


    it('empty video path', async () => {
        const req = {
            body: {
                title: 'test_video',
                link: '',
            },
        };
        const result = await crudFunction.updateVideo(req.body);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

});