import express from 'express';
import {
  registerUser,
  loginUser,
  getUserDetails,
  updateUser,
  deleteUser,
  getCurrentUser,
} from '../controllers/UserController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserDetails);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
// Route to get current user details
router.get('/me', protect, getCurrentUser); // Protected route to get current user details

export default router;
