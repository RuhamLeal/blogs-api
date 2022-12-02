const userService = require('../services/user.services');

const logUser = async (req, res) => {
  const loginData = req.body;
  const { status, data } = await userService.logUser(loginData);
  return res.status(status).json(data);
};

const getUsers = async (_req, res) => {
  const { status, data } = await userService.findAllUsers();
  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const { status, data } = await userService.findUserById(userId);
  return res.status(status).json(data);
};

const registerUser = async (req, res) => {
  const userData = req.body;
  const { status, data } = await userService.createUser(userData);
  return res.status(status).json(data);
};

module.exports = {
  logUser,
  registerUser,
  getUsers,
  getUserById,
};