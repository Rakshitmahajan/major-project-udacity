const express = require('express');
const { updateImage } = require('../config/crudFunction')
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

router.put('/updateImage', upload.single('image'), async (req, res) => {
    const result = await updateImage(req.body,`./uploads/${req.file.originalname}`);
    res.json(result);
});

module.exports = router;