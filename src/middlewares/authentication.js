const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenAuthentication = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) { return res.status(401).json({ message: 'Token not found' }); }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });

    req.userId = decoded.userId;
    return next();
  });
};

module.exports = tokenAuthentication;