const express = require("express");
const { loginMentor } = require("../config/function");
const router = express.Router();

router.post("/mentorLogin", async (req, res) => {
    const result = await loginMentor(req.body);
    res.json(result);
});

module.exports = router;