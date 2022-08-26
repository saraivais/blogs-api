const categoryService = require('../services/category');

const categoryController = {
  getAll: async (_request, response, _next) => {
    const allCategories = await categoryService.getAll();
    return response.status(200).json(allCategories);
  },
};

module.exports = categoryController;
