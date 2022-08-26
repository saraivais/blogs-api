const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const userService = {
  exists: async (id) => {
    const chosenUser = await User.findByPk(id);
    return (chosenUser !== null);
  },

  verifyUserLoggedIn: async (token, userId) => {
    const decodedPayload = jwt.decode(token);
    if (decodedPayload.id !== userId) {
      throw new Error('401|Unauthorized user');
    }
  },

  getAll: async () => {
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    return allUsers;
  },
};

module.exports = userService;
