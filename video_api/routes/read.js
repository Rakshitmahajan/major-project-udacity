const express = require('express');
const { readVideo } = require('../config/function')
const router = express.Router();

router.get('/readVideo', async (req, res) => {
    const result = await readVideo(req.body.title);
        res.json(result)
});

module.exports = router;