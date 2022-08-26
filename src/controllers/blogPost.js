const blogPostService = require('../services/blogPost');

const blogPostController = {
  getAll: async (_request, response, _next) => {
    const allPosts = await blogPostService.getAll();

    return response.status(200).json(allPosts);
  },

  create: async (request, response, _next) => {
    const token = request.headers.authorization;
    const createdPost = await blogPostService.create(request.body, token);

    return response.status(201).json(createdPost);
  },
};

module.exports = blogPostController;
