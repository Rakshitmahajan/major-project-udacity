const express = require('express');
const { readImage } = require('../config/function')
const router = express.Router();

router.post('/readImage', async (req, res) => {
    const result = await readImage(req.body);
        res.json(result)
});

module.exports = router;