const Joi = require('joi');
const runSchema = require('./joiValidator');
const { BlogPost } = require('../database/models');

const blogPostService = {
  validateBlogPostFiekds: runSchema(Joi.object({
    title: Joi.string().required().messages({
      'string.required': '400|Some required fields are missing',
    }),
    content: Joi.string().required().messages({
      'string.required': '400|Some required fields are missing',
    }),
    categoryIds: Joi.array().required().messages({
      'array.required': '400|"categoryIds" not found',
    }),
  })),
};

module.exports = blogPostService;