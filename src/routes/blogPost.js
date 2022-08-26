const express = require('express');
const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPost');
const jwtValidation = require('../middlewares/auth');

const blogPostRoute = express.Router();

blogPostRoute.use(jwtValidation);

module.exports = blogPostRoute;