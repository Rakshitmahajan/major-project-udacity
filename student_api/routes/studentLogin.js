const express = require('express');
const { login } = require('../function')
const router = express.Router();

router.post('/studentLogin', async (req, res) => {
    const result = await login(req.body);
        res.json(result)
});

module.exports = router;