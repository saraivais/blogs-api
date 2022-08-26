const Joi = require('joi');
const runSchema = require('./joiValidator');
const { BlogPost } = require('../database/models');
const categoryService = require('./category');

const blogPostService = {
  create: async (newPost) => {
    const verifiedPostData = await blogPostService.validateBlogPostFields(newPost);
    await blogPostService.verifyAllCategories(verifiedPostData.categoryIds);

    const createdPost = await BlogPost.create(verifiedPostData);
    console.log('createdPost', createdPost);
    console.log('dataValues', createdPost.dataValues);
    return createdPost.dataValues;
  },

  validateBlogPostFields: runSchema(Joi.object({
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

  verifyAllCategories: async (categoryIds) => {
    const allCategoriesVerified = await Promise.all(categoryIds
      .map((categId) => categoryService.exists(categId)));
    console.log('allCategoriesVerificed', allCategoriesVerified);
    const allCategoriesValid = allCategoriesVerified.every((check) => check === true);
    if (!allCategoriesValid) {
      throw new Error('400|"categoryIds" not found');
    }
  },
};

module.exports = blogPostService;