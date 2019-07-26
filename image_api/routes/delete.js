const express = require('express');
const { deleteImage } = require('../config/function')
const router = express.Router();

router.post('/deleteImage', async (req, res) => {
    const result = await deleteImage(req.body);
        res.json(result)
});

module.exports = router;