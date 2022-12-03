const express = require('express');
const postController = require('../controllers/post.controller');
const tokenAuthentication = require('../middlewares/authentication');

const postRouter = express.Router();

postRouter
  .get('/post', tokenAuthentication, postController.getPosts)
  .post('/post', tokenAuthentication, postController.addPost);

module.exports = postRouter;