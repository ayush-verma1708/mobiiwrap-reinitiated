import express from 'express';
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
} from '../controllers/ReviewController.js';

const router = express.Router();

router.post('/', createReview);
router.get('/:productId', getProductReviews);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
