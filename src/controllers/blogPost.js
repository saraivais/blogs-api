const blogPostService = require('../services/blogPost');

const blogPostController = {
  getAllThroughSearch: async (request, response, _next) => {
    const { q } = request.query;
    const searchResult = await blogPostService.getAllThroughSearch(q);

    return response.status(200).json(searchResult);
  },

  getAll: async (_request, response, _next) => {
    const allPosts = await blogPostService.getAll();

    return response.status(200).json(allPosts);
  },

  getById: async (request, response, _next) => {
    const { id } = request.params;
    const chosenPost = await blogPostService.getById(id);

    return response.status(200).json(chosenPost);
  },

  create: async (request, response, _next) => {
    const token = request.headers.authorization;
    const createdPost = await blogPostService.create(request.body, token);

    return response.status(201).json(createdPost);
  },

  update: async (request, response, _next) => {
    const token = request.headers.authorization;
    const { id } = request.params;
    const updatedPost = await blogPostService.update(token, id, request.body);

    return response.status(200).json(updatedPost);
  },

  delete: async (request, response, _next) => {
    const token = request.headers.authorization;
    const { id } = request.params;

    await blogPostService.delete(token, id);

    return response.status(204).end();
  },

};

module.exports = blogPostController;
