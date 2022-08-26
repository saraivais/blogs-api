const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user');
const jwtValidation = require('../middlewares/auth');

const userRoute = express.Router();

userRoute.get('/:id', jwtValidation, rescue(userController.getById));
userRoute.get('/', jwtValidation, rescue(userController.getAll));
userRoute.post('/', rescue(userController.create));

module.exports = userRoute;