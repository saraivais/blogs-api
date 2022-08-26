const Joi = require('joi');
const jwt = require('jsonwebtoken');
const runSchema = require('./joiValidator');
const { User } = require('../database/models');
require('dotenv').config();

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
    const chosenUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return chosenUser;
  },

  validatePostFields: runSchema(Joi.object({
    displayName: Joi.string().required().min(8).messages({
      'any.required': '400|"displayName" length must be at least 8 characters long',
      'string.min': '400|"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().required().email().messages({
      'any.required': '400|"email" must be a valid email',
      'string.email': '400|"email" must be a valid email',
    }),
    password: Joi.string().required().min(6).messages({
      'any.required': '400|"password" length must be at least 6 characters long',
      'string.min': '400|"password" length must be at least 6 characters long',
    }),
    image: Joi.string(),
  })),

  create: async ({ displayName, email, password, image }) => {
    const alreadyExists = await userService.emailRegistered(email);
    if (alreadyExists) {
      throw new Error('409|User already registered');
    }
    await userService.validatePostFields(
      { displayName, email, password, image },
    );

    const createdUser = await User.create({ displayName, email, password, image });
    const token = userService.generateNewUserToken(email, createdUser.id);

    return token;
  },

  generateNewUserToken: (email, id) => {
    const jwtConfig = {
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { email, id }}, process.env.JWT_SECRET, jwtConfig);
    return token;
  },
};

module.exports = userService;
