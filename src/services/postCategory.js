const { PostCategory } = require('../database/models');

const postCategoryService = {
  
  createPostsRelations: async (id, categoryIds) => {
    const allRelations = await Promise.all(categoryIds
      .map((categId) => postCategoryService.insertOneRelation(id, categId)));
    console.log('allrelationscreated', allRelations);
  },

  insertOneRelation: async (id, categoryId) => {
    const createdRelation = await PostCategory.create({ postId: id, categoryId });
    return createdRelation;
  },

};

module.exports = postCategoryService;