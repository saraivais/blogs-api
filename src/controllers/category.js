const categoryService = require('../services/category');

const categoryController = {
  getAll: async (_request, response, _next) => {
    const allCategories = await categoryService.getAll();
    return response.status(200).json(allCategories);
  },

  create: async (request, response, _next) => {
    const createdUser = await categoryService.create(request.body);
    return response.status(201).json(createdUser);
  },
};

module.exports = categoryController;
