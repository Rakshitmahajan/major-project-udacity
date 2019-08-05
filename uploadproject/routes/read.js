const express = require('express');
const { readProject } = require('../config/crudFunction')
const router = express.Router();

router.get('/readProject', async (req, res) => {
    const result = await readProject();
    res.json(result);
});

module.exports = router;