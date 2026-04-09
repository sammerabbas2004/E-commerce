const express = require('express');
const controller = require('../controller/food.controller');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middleware');
// Configure multer for file uploads
const upload = multer({
    storage: multer.memoryStorage(),
})

router.post('/', authMiddleware.authenticateFoodPartner, upload.single('video'), controller.createFood);

module.exports = router;