const express = require('express');
const mainRouter = require('./routes/index');

// ...

const app = express();

app.use(express.json());

mainRouter(app);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
