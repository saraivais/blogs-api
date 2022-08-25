const Joi = require('joi');
const jwt = require('jsonwebtoken');
const runSchema = require('./joiValidator');
const { User } = require('../database/models');
require('dotenv').config();

const loginService = {
  logIn: async ({ email, password }) => {
    await loginService.validateLoginFields({ email, password });
    const id = await loginService.emailPasswordMatch(email, password);

    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { email, id } }, process.env.JWT_SECRET, jwtConfig);
    return token;
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

  emailPasswordMatch: async (loginEmail, loginPassword) => {
    const chosenEmailAndPasswords = await User.findOne(
      { where: { email: loginEmail, password: loginPassword } },
    );

    if (chosenEmailAndPasswords === null) {
      throw new Error('400|Invalid fields');
    }

    return chosenEmailAndPasswords.dataValues.id;
  },
};

module.exports = loginService;