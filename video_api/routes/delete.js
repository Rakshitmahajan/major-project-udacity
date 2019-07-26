const express = require('express');
const { deleteVideo } = require('../config/crudFunction')
const router = express.Router();

router.delete('/deleteVideo', async (req, res) => {
    const result = await deleteVideo(req.body.title);
    res.json(result);
});

module.exports = router;