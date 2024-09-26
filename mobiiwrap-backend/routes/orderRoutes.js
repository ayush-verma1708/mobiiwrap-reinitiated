import express from 'express';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/OrderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/:userId', getUserOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
