const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (params = {}) => (
  jwt.sign(params, process.env.JWT_SECRET, { expiresIn: 360 })
);

module.exports = generateToken;