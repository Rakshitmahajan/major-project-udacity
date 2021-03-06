const express = require('express');
const { insertImage } = require('../config/crudFunction')
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

router.post('/insertImage', upload.single('image'), async (req, res) => {
    const result = await insertImage(req.body,`http://10.10.4.101:5400/uploads/${req.file.originalname}`);
    res.json(result);
});

module.exports = router;