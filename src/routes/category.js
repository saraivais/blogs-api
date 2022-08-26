const express = require('express');
const rescue = require('express-rescue');
const categoryController = require('../controllers/category');
const jwtValidation = require('../middlewares/auth');

const categoryRoute = express.Router();

categoryRoute.get('/', jwtValidation, rescue(categoryController.getAll));
categoryRoute.post('/', jwtValidation, rescue(categoryController.create));

module.exports = categoryRoute;