const express = require('express');
const UserController = require('../controllers/user.controller');
const tokenAuthentication = require('../middlewares/authentication');

const userRouter = express.Router();

userRouter
  .get('/user', tokenAuthentication, UserController.getUsers)
  .get('/user/:userId', tokenAuthentication, UserController.getUserById)
  .post('/login', UserController.logUser)
  .post('/user', UserController.registerUser)
  .delete('/user/me', tokenAuthentication, UserController.deleteUser);

module.exports = userRouter;