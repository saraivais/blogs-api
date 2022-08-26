const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const userService = {
  exists: async (id) => {
    const chosenUser = await User.findByPk(id);
    return (chosenUser !== null);
  },

  emailRegistered: async (userEmail) => {
    const chosenUser = await User.findOne({ where: { email: userEmail } });
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

  getById: async (id) => {
    const userExists = await userService.exists(id);
    if (!userExists) {
      // console.log('user não existe, linha 33 userservice');
      throw new Error('404|User does not exist');
    }
    const chosenUser = await User.findByPk(id);
    return chosenUser;
  },

};

module.exports = userService;
