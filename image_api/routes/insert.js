const express = require('express');
const { insertImage } = require('../config/function')
const router = express.Router();

router.post('/insertImage', async (req, res) => {
    const result = await insertImage(req.body);
        res.json(result)
});

module.exports = router;