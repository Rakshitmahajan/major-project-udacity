const express = require('express');
const { updateVideo } = require('../config/function')
const router = express.Router();

router.put('/updateVideo', async (req, res) => {
    const result = await updateVideo(req.body);
        res.json(result)
});

module.exports = router;