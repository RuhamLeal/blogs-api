const userService = require('../services/user.services');

const logUser = async (req, res) => {
  const loginData = req.body;
  const { status, data } = await userService.logUser(loginData);
  return res.status(status).json(data);
};

module.exports = {
  logUser,
};