const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Blog\'s API',
    description: 'Simulates the database system of a blog. Manages login, users, blog posts, categories through CRUD endpoints.',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/api.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);