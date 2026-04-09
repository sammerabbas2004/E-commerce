const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller');

//user routes
router.post('/user/register', controller.registerUser);
router.post('/user/login', controller.loginUser);
router.get('/user/logout',controller.logoutUser);

//food partner routes
router.post('/foodpartner/register', controller.registerFoodPartner);
router.post('/foodpartner/login', controller.loginFoodPartner);
router.get('/foodpartner/logout', controller.logoutFoodPartner);

module.exports = router;