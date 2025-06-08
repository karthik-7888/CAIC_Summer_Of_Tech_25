// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
    req.user = decoded; // Attach user id to request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}

module.exports = authMiddleware;
