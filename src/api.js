const express = require('express');
const loginRoute = require('./routes/login');
const errorMiddleware = require('./errors/errorMiddleware');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
app.use(errorMiddleware);

module.exports = app;
