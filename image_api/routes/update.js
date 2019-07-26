const express = require('express');
const { updateImage } = require('../config/function')
const router = express.Router();

router.put('/updateImage', async (req, res) => {
    const result = await updateImage(req.body);
        res.json(result)
});

module.exports = router;