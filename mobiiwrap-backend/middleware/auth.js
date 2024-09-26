import { verifyToken } from '../utils/jwt.js';

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from the Authorization header
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
