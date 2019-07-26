const db = require('./sqlConnection');
const winston = require('./winston');

async function insertVideo(req) {
    const { title, link } = req;
    if (!title || !link) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    }
    const [rows] = await db.query(`select * FROM video WHERE title = '${title}'`);
    if (rows[0] !== undefined) {
        return ({
            err: {
                message: 'already exist',
            },
            data: null,
        });
    }
    try {
        await db.query(`INSERT INTO video (title, link) VALUES ('${title}', '${link}')`);
        return ({
            err: null,
            data: {
                'title': title,
                'link': link,
            }
        });
    } catch (err) {
        winston.error(err.stack);
    }
}

async function readVideo(videoTitle) {
    if (!videoTitle) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    }
    try {
        const [rows] = await db.query(`select * FROM video WHERE title = '${videoTitle}'`);
        if (rows[0] == undefined) {
            return ({
                err: {
                    message: 'video not found',
                },
                data: null,
            });
        } else {
            return ({
                err: null,
                data: {
                    title: rows[0].title,
                    link: rows[0].link,
                }
            });
        }
    } catch (err) {
        winston.error(err.stack);
    }
}

async function deleteVideo(videoTitle) {
    if (!videoTitle) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    }
    try {
        await db.query(`DELETE FROM video WHERE title = '${videoTitle}'`);
        return ({
            err: null,
            data: {
                title: videoTitle,
                message: 'video deleted',
            },
        });
    } catch (err) {
        winston.error(err.stack);
    }
}

async function updateVideo(req) {
    const { title, link } = req;
    if (!title || !link) {
        return ({
            err: {
                message: 'fields required',
            },
            data: null,
        });
    }
    try {
        await db.query(`UPDATE video SET link = '${link}'  WHERE title = '${title}'`);
        return ({
            err: null,
            data: {
                'title': title,
                'link': link,
            }
        });
    } catch (err) {
        winston.error(err.stack);
    }
}

module.exports = {
    insertVideo,
    readVideo,
    deleteVideo,
    updateVideo
};