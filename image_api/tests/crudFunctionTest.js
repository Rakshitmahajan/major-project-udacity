const { expect } = require('chai');

const crudFunction = require('../config/crudFunction');

describe('Image Operations', () => {
    it('Inserts a image', async () => {
        const req = {
            body: {
                title: 'test_image',
                link: 'http://www.muesdesign.com/wp-content/uploads/2015/04/TRY_ORANGE.jpg',

            },
        };
        const result = await crudFunction.insertImage(req);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_image',
                link: 'http://www.muesdesign.com/wp-content/uploads/2015/04/TRY_ORANGE.jpg',
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
        const result = await crudFunction.insertImage(req);
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
                title: 'test_image',
                link: 'http://www.muesdesign.com/wp-content/uploads/2015/04/TRY_ORANGE.jpg',
            },
        };
        const result = await crudFunction.insertImage(req);
        expect(result).to.deep.equal({
            err: {
                message: 'already exist',
            },
            data: null,
        });
    });
});

describe('Reading Image', () => {
    it('image found', async () => {
        const req = {
            body: {
                title: 'test_image',
            },
        };
        const result = await crudFunction.readImage(req);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_image',
                link: 'http://www.muesdesign.com/wp-content/uploads/2015/04/TRY_ORANGE.jpg',
            }
        });
    });

    it('image not found', async () => {
        const req = {
            body: {
                title: 'try_image',
            },
        };
        const result = await crudFunction.readImage(req);
        expect(result).to.deep.equal({
            err: {
                message: 'image not found',
            },
            data: null,
        });
    });

    it('empty image path', async () => {
        const req = {
            body: {
                title: '',
            },
        };
        const result = await crudFunction.readImage(req);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

});

describe('Deleting a Image', () => {
    it('Image found', async () => {
        const req = {
            body: {
                title: 'test_image',
            },
        };
        const result = await crudFunction.deleteImage(req);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_image',
                message: 'image deleted',
            },
        });
    });

    it('empty image path', async () => {
        const req = {
            body: {
                title: '',
            },
        };
        const result = await crudFunction.deleteImage(req);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

});


describe('Updating a Image', () => {
    it('Image found', async () => {
        const req = {
            body: {
                title: 'test_image',
                link: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/68127/2012/06/97678-94350.jpg?itok=7zqwtnPQ'
            },
        };
        const result = await crudFunction.updateImage(req);
        expect(result).to.deep.equal({
            err: null,
            data: {
                title: 'test_image',
                link: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/68127/2012/06/97678-94350.jpg?itok=7zqwtnPQ',
            },
        });
    });


    it('empty image path', async () => {
        const req = {
            body: {
                title: 'test_image',
                link: '',
            },
        };
        const result = await crudFunction.updateImage(req);
        expect(result).to.deep.equal({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    });

});