const express = require('express');
const { insertProject } = require('../config/crudFunction')
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
}); 

const upload = multer({storage:storage});

router.post('/insertProject', upload.single('file'), async (req, res) => {
    console.log(req.body);
    const result = await insertProject(req.body.title, req.body.email);
    res.json(result);
});

module.exports = router;