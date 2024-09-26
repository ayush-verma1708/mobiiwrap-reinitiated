import Wishlist from '../models/Wishlist.js';

// Add to wishlist
export const addToWishlist = async (req, res) => {
  const { user, product } = req.body;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { user },
      { $addToSet: { products: product } },
      { new: true, upsert: true }
    );
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user's wishlist
export const getUserWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.params.userId });
    if (!wishlist)
      return res.status(404).json({ message: 'Wishlist not found' });
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete from wishlist
export const removeFromWishlist = async (req, res) => {
  const { user, productId } = req.body;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { user },
      { $pull: { products: productId } },
      { new: true }
    );
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
