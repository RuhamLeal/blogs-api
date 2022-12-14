const postService = require('../services/post.service');

const getPosts = async (_req, res) => {
  const { status, data } = await postService.findAllPosts();
  return res.status(status).json(data);
};

const getPostById = async (req, res) => {
  const { postId } = req.params;
  const { status, data } = await postService.findPostById(postId);
  return res.status(status).json(data);
};

const getPostsByQuery = async (req, res) => {
  const { q } = req.query;
  const { status, data } = await postService.findPostByQuery(q);
  return res.status(status).json(data);
};

const updatePost = async (req, res) => {
  const { userId } = req;
  const { postId } = req.params;
  const postData = req.body;
  const { status, data } = await postService.updatePost(userId, postId, postData);
  return res.status(status).json(data);
};

const deletePost = async (req, res) => {
  const { userId } = req;
  const { postId } = req.params;
  const { status, data } = await postService.deletePost(userId, postId);
  if (!data) return res.status(status).json();
  return res.status(status).json(data);
};

const addPost = async (req, res) => {
  const { userId } = req;
  const postData = req.body;
  const { status, data } = await postService.createPost(userId, postData);
  return res.status(status).json(data);
};

module.exports = {
  addPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsByQuery,
};