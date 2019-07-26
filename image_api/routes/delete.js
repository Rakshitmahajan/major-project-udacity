const express = require('express');
const { deleteImage } = require('../config/function')
const router = express.Router();

router.delete('/deleteImage', async (req, res) => {
    const result = await deleteImage(req.body.title);
        res.json(result)
});

module.exports = router;