const Joi = require('joi');
const runSchema = require('./joiValidator');

// const { User } = require('../database/models');

const loginService = {
  logIn: async () => {

  },

  validateLoginFields: runSchema(Joi.object({
    email: Joi.string().required().empty('').messages({
      'any.required': '400|Some required fields are missing',
      'any.empty': '400|Some required fields are missing',
    }),
    password: Joi.string().required().empty('').messages({
      'any.required': '400|Some required fields are missing',
      'any.empty': '400|Some required fields are missing',
    }),
  })),

  userExists: async () => {},
  userPasswordMatch: async () => {},
};

module.exports = loginService;