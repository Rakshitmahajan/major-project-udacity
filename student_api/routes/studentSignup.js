const express = require('express');
const { signupStudent } = require('../config/loginSignUpFunction')
const router = express.Router();

router.post('/studentSignup', async (req, res) => {
    const result = await signupStudent(req.body);
    res.json(result);
});

module.exports = router;