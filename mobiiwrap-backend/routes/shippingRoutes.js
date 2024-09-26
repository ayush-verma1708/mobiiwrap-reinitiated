import express from 'express';
import {
  createShippingInfo,
  getShippingByOrderId,
  updateShippingInfo,
  deleteShippingInfo,
} from '../controllers/ShippingController.js';

const router = express.Router();

router.post('/', createShippingInfo);
router.get('/:orderId', getShippingByOrderId);
router.put('/:id', updateShippingInfo);
router.delete('/:id', deleteShippingInfo);

export default router;
