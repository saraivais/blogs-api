const express = require('express');
const swaggerUi = require('swagger-ui-express');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const blogPostRoute = require('./routes/blogPost');
const errorMiddleware = require('./errors/errorMiddleware');
const swaggerDocument = require('../swagger.json');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', blogPostRoute);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use(errorMiddleware);

module.exports = app;
