const Joi = require('joi');
const { Op } = require('sequelize');
const runSchema = require('./joiValidator');
const { BlogPost, User, Category } = require('../database/models');
const categoryService = require('./category');
const userService = require('./user');
const postCategoryService = require('./postCategory');

const missingFieldsError = '400|Some required fields are missing';

const blogPostService = {
  getAll: async () => {
    const allPosts = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
       }, {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
       }] });
    return allPosts;
  },

  getAllThroughSearch: async (query) => {
    if (!query) {
      const allPosts = await blogPostService.getAll();
      return allPosts;
    }
    const allPostsFiltered = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } }, { content: { [Op.like]: `%${query}%` } }] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return allPostsFiltered || [];
  },

  getById: async (id) => {
    const chosenPost = await BlogPost.findByPk(id, {
      include: [{
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        }],
    });
    if (chosenPost === null) {
      throw new Error('404|Post does not exist');
    }
    console.log(chosenPost.dataValues);
    return chosenPost.dataValues;
  },

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

  update: async (token, postId, newPostData) => {
    const postToEdit = await blogPostService.getById(postId);
    userService.verifyUserLoggedIn(token, postToEdit.userId);
    const validatedFields = await blogPostService.validateUpdateFields(newPostData);

    await BlogPost.update(
      { title: validatedFields.title, content: validatedFields.content },
      { where: {
        id: postId,
      } },
    );
    
    const updatedPost = await blogPostService.getById(postId);
    return updatedPost;
  },

  delete: async (token, postId) => {
    const postToDelete = await blogPostService.getById(postId);
    userService.verifyUserLoggedIn(token, postToDelete.userId);

    await BlogPost.destroy({
      where: {
        id: postId,
      },
    });
  },

  getUserId: (token) => {
    const payload = userService.getPayload(token);
    return payload.id;
  },

  validateBlogPostFields: runSchema(Joi.object({
    title: Joi.string().required().messages({
      'string.required': missingFieldsError,
      'string.empty': missingFieldsError,
    }),
    content: Joi.string().required().messages({
      'string.required': missingFieldsError,
    }),
    categoryIds: Joi.array().required().messages({
      'array.required': '400|"categoryIds" not found',
    }),
  })),

  validateUpdateFields: runSchema(Joi.object({
    title: Joi.string().required().messages({
      'string.required': missingFieldsError,
      'string.empty': missingFieldsError,
    }),
    content: Joi.string().required().messages({
      'string.required': missingFieldsError,
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