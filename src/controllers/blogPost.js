const blogPostService = require('../services/blogPost');

const blogPostController = {
  create: async (request, response, _next) => {
    const createdPost = await blogPostService.create(request.body);

    return response.status(201).json(createdPost);
  },
};

module.exports = blogPostController;
