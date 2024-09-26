import Cart from '../models/Cart.js';

// Create or update cart
export const updateCart = async (req, res) => {
  const { user, products } = req.body;
  try {
    const existingCart = await Cart.findOneAndUpdate(
      { user },
      { products },
      { new: true, upsert: true }
    );
    res.status(200).json(existingCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user's cart
export const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete cart
export const deleteCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.params.userId });
    res.status(200).json({ message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
