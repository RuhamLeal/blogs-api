const express = require('express');
const UserController = require('../controllers/user.controller');
const tokenAuthentication = require('../middlewares/authentication');

const userRouter = express.Router();

userRouter
  .get('/user', tokenAuthentication, UserController.getUsers)
  .post('/login', UserController.logUser)
  .post('/user', UserController.registerUser);

module.exports = userRouter;