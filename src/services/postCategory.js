const { PostCategory } = require('../database/models');

const postCategoryService = {
  createRelationsInBulk: async (id, categoryIds) => {
    await PostCategory.bulkCreate(categoryIds
      .map((categoryId) => ({ postId: id, categoryId })), { validate: true });
  },
};

module.exports = postCategoryService;