const express = require('express');
const { readImage } = require('../config/crudFunction')
const router = express.Router();

router.get('/readImage/:id', async (req, res) => {
    const result = await readImage(req.params.id);
    res.json(result);
});

module.exports = router;