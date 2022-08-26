const userService = require('../services/user');

const userController = {
  getAll: async (_request, response, _next) => {
    const allUsers = await userService.getAll();
    return response.status(200).json(allUsers);
  },

};

module.exports = userController;
