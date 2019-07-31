const db = require('./sqlConnection');

async function insertImage(req, link) {
    const { title } = req;
    if (!title || !link) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        })
    }
    const [rows] = await db.query(`select * FROM image WHERE title = '${title}'`)
    if (rows[0] !== undefined) {
        return ({
            err: {
                message: 'already exist',
            },
            data: null,
        })
    }
    try {
        await db.query(`INSERT INTO image (title, link) VALUES ('${title}', '${link}')`);
        return ({
            err: null,
            data: {
                'title': title,
                'link': link,
            }
        })
    } catch (err) {
        console.log(err);
    }
}

async function readImage(imageTitle) {
    if (!imageTitle) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        })
    }
    try {
        const [rows] = await db.query(`select * FROM image WHERE title = '${imageTitle}'`);
        if (rows[0] == undefined) {
            return ({
                err: {
                    message: 'image not found',
                },
                data: null,
            })
        } else {
            return ({
                err: null,
                data: {
                    title: rows[0].title,
                    link: rows[0].link
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
}

async function deleteImage(imageTitle) {
    if (!imageTitle) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        })
    }
    try {
        await db.query(`DELETE FROM image WHERE title = '${imageTitle}'`);
        return ({
            err: null,
            data: {
                title: imageTitle,
                message: 'image deleted'
            }
        })
    } catch (err) {
        console.log(err);
    }
}

async function updateImage(req, link) {
    const { title } = req;
    if (!title || !link) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        })
    }
    try {
        await db.query(`UPDATE image SET link = '${link}'  WHERE title = '${title}'`);
        return ({
            err: null,
            data: {
                'title': title,
                'link': link,
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    insertImage,
    readImage,
    deleteImage,
    updateImage
}