const express = require('express');
const mainRouter = require('./routes/index');

const app = express();

app.use(express.json());

mainRouter(app);

module.exports = app;
