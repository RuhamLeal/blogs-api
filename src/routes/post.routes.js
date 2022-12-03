const express = require('express');
const postController = require('../controllers/post.controller');
const tokenAuthentication = require('../middlewares/authentication');

const postRouter = express.Router();

postRouter
  .get('/post', tokenAuthentication, postController.getPosts)
  .get('/post/:postId', tokenAuthentication, postController.getPostById)
  .put('/post/:postId', tokenAuthentication, postController.updatePost)
  .post('/post', tokenAuthentication, postController.addPost);

module.exports = postRouter;