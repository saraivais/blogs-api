const userService = require('../services/user');

const userController = {
  getAll: async (_request, response, _next) => {
    const allUsers = await userService.getAll();
    return response.status(200).json(allUsers);
  },

  getById: async (request, response, _next) => {
    const { id } = request.params;
    const chosenUser = await userService.getById(id);
    return response.status(200).json(chosenUser);
  },

  create: async (request, response, _next) => {
    const token = await userService.create(request.body);
    return response.status(201).json({ token });
  },

  delete: async (request, response, _next) => {
    console.log('ENTREI NO DELETE CONTROLLER');
    const { authorization } = request.headers;
    console.log('authorization', authorization);
    const deletedUser = await userService.delete(authorization);
    console.log('deletedUser', deletedUser);
    return response.status(204).end();
  },
};

module.exports = userController;
