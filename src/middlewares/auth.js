const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtValidation = (request, _response, next) => {
  const token = request.headers.authorization;
  if (!token) throw new Error('401|Token not found');
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    throw new Error('401|Expired or invalid token');
  }
};

module.exports = jwtValidation;
