const express = require('express');
const rescue = require('express-rescue');
const loginController = require('../controllers/login');

const loginRoute = express.Router();

loginRoute.post('/', rescue(loginController.logIn));

module.exports = loginRoute;