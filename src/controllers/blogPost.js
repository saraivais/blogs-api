const blogPostService = require('../services/blogPost');

const blogPostController = {
  create: async (request, response, _next) => {
    const token = request.headers.authorization;
    const createdPost = await blogPostService.create(request.body, token);

    return response.status(201).json(createdPost);
  },
};

module.exports = blogPostController;
