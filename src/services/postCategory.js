const { PostCategory } = require('../database/models');

const postCategoryService = {
  createRelationsInBulk: async (id, categoryIds) => {
    await PostCategory.bulkCreate(categoryIds
      .map((categoryId) => ({ postId: id, categoryId })), { validate: true });
  },

  insertOneRelation: async (id, categoryId) => {
    const createdRelation = await PostCategory.create({ postId: id, categoryId });
    return createdRelation;
  },

};

module.exports = postCategoryService;