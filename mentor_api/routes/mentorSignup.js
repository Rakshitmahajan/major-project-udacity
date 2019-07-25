const express = require('express');
const { signup } = require('../function')
const router = express.Router();

router.post('/mentorSignup', async (req, res) => {
    const result = await signup(req.body);
    res.json(result);
});

module.exports = router;