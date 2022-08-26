const Joi = require('joi');
const runSchema = require('./joiValidator');
const { Category } = require('../database/models');

const categoryService = {
  validateCategoryName: runSchema(Joi.object({
    name: Joi.string().required().empty('').messages({
      'any.required': '400|"name" is required',
      'any.empty': '400|"name" is required',
    }),
  })),

  getAll: async () => {
    const allCategories = await Category.findAll();
    return allCategories;
  },
};

module.exports = categoryService;
