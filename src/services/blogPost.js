const Joi = require('joi');
const runSchema = require('./joiValidator');
const { BlogPost } = require('../database/models');
const categoryService = require('./category');
const userService = require('./user');
const postCategoryService = require('./postCategory');

const blogPostService = {
  create: async (newPost, token) => {
    const verifiedPostData = await blogPostService.validateBlogPostFields(newPost);
    await blogPostService.verifyAllCategories(verifiedPostData.categoryIds);
    const userId = blogPostService.getUserId(token);

    const createdPost = await BlogPost.create({
      title: verifiedPostData.title,
      content: verifiedPostData.content,
      userId,
    });

    await postCategoryService.createPostsRelations(
      createdPost.dataValues.id,
      verifiedPostData.categoryIds,
    );

    return createdPost.dataValues;
  },

  getUserId: (token) => {
    const payload = userService.getPayload(token);
    return payload.id;
  },

  validateBlogPostFields: runSchema(Joi.object({
    title: Joi.string().required().messages({
      'string.required': '400|Some required fields are missing',
      'string.empty': '400|Some required fields are missing',
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