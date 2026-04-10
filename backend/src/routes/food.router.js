const express = require('express');
const controller = require('../controller/food.controller');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middleware');
// Configure multer for file uploads
const upload = multer({
    storage: multer.memoryStorage(),
})
//post route to create a new food item, with authentication and file upload handling

router.post('/', upload.single('video'), authMiddleware.authenticateFoodPartner, controller.createFood);

//get /api/food protected route to get all food items for the users.
router.get('/',authMiddleware.authenticateUser, controller.getAllFoods);


module.exports = router;