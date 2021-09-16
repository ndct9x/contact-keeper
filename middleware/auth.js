const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get the token from the headers
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) return res.status(401).json({ msg: 'No token, Access Denied' });

  try {
    const decode = jwt.verify(token, config.get('jwtSecret'));

    req.user = decode.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: 'No token, Access Denied' });
  }
};
