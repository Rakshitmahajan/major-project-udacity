const express = require("express");
const { signupMentor } = require("../config/function");
const router = express.Router();

router.post("/mentorSignup", async (req, res) => {
    const result = await signupMentor(req.body);
    res.json(result);
});

module.exports = router;