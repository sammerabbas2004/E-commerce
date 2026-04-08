const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');
router.post('/user/register', controller.registerUser);

module.exports = router;