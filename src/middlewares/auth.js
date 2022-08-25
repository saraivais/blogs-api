const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtValidation = (request, _response, next) => {
  const { authorization } = request.headers;
  if (!authorization) throw new Error('Token not found');
  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
    throw new Error('Expired or invalid token');
  }
};

module.exports = jwtValidation;
