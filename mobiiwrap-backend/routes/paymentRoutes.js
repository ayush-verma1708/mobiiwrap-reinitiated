import express from 'express';
import {
  createPayment,
  getUserPayments,
  updatePayment,
  deletePayment,
} from '../controllers/PaymentController.js';

const router = express.Router();

router.post('/', createPayment);
router.get('/:userId', getUserPayments);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

export default router;
