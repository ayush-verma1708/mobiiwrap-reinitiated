import express from 'express';
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
} from '../controllers/WishlistController.js';

const router = express.Router();

router.post('/', addToWishlist);
router.get('/:userId', getUserWishlist);
router.delete('/:userId/products/:productId', removeFromWishlist);

export default router;
