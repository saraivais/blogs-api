const { User } = require('../database/models');

const userService = {
  exists: async (id) => {
    const chosenUser = await User.findByPk(id);
    return (chosenUser !== null);
  },

};

module.exports = userService;
