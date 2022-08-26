const express = require('express');
const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPost');
const jwtValidation = require('../middlewares/auth');

const blogPostRoute = express.Router();

blogPostRoute.use(jwtValidation);
blogPostRoute.get('/search', rescue(blogPostController.getAllThroughSearch));
blogPostRoute.put('/:id', rescue(blogPostController.update));
blogPostRoute.get('/:id', rescue(blogPostController.getById));
blogPostRoute.get('/', rescue(blogPostController.getAll));
blogPostRoute.post('/', rescue(blogPostController.create));

module.exports = blogPostRoute;