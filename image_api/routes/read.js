const express = require('express');
const { readImage } = require('../config/crudFunction')
const router = express.Router();

router.get('/readImage', async (req, res) => {
    const result = await readImage(req.body.title);
    res.json(result);
});

module.exports = router;