const express = require('express');
const { loginStudent } = require('../config/function')
const router = express.Router();

router.post('/studentLogin', async (req, res) => {
    const result = await loginStudent(req.body);
        res.json(result)
});

module.exports = router;