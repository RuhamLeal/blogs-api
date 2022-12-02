const express = require('express');
const categoryController = require('../controllers/category.controller');
const tokenAuthentication = require('../middlewares/authentication');

const categoryRouter = express.Router();

categoryRouter
  .post('/categories', tokenAuthentication, categoryController.addCategory);

module.exports = categoryRouter;