const router = require('express').Router();
const multer = require('multer');
const UploadController = require('../controllers/UploadController');

const upload = multer({});

router.get('/upload', UploadController.List);
router.post('/upload', upload.single('file'), UploadController.Create);
router.delete('/upload/:id', UploadController.Delete);

module.exports = router;