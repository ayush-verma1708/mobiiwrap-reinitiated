import express from 'express';
import {
  updateCart,
  getUserCart,
  deleteCart,
} from '../controllers/CartController.js';

const router = express.Router();

router.put('/:userId', updateCart);
router.get('/:userId', getUserCart);
router.delete('/:userId', deleteCart);

export default router;
