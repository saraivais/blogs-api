const loginService = require('../services/login');

const loginController = {
  logIn: async (request, response, _next) => {
    const token = await loginService.logIn(request.body);
    return response.status(200).json({ token });
  },
};

module.exports = loginController;
