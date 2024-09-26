import Shipping from '../models/Shipping.js';

// Create Shipping Information
export const createShippingInfo = async (req, res) => {
  const { order, shippingAddress, shippingDate, status, deliveryDate } =
    req.body;

  try {
    const shipping = new Shipping({
      order,
      shippingAddress,
      shippingDate,
      status,
      deliveryDate,
    });
    await shipping.save();
    res.status(201).json(shipping);
  } catch (error) {
    res.status(500).json({ error: 'Could not create shipping info' });
  }
};

// Get Shipping Information by Order ID
export const getShippingByOrderId = async (req, res) => {
  try {
    const shipping = await Shipping.findOne({ order: req.params.orderId });
    if (!shipping)
      return res.status(404).json({ error: 'Shipping info not found' });
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch shipping info' });
  }
};

// Update Shipping Information
export const updateShippingInfo = async (req, res) => {
  try {
    const shipping = await Shipping.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!shipping)
      return res.status(404).json({ error: 'Shipping info not found' });
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ error: 'Could not update shipping info' });
  }
};

// Delete Shipping Information
export const deleteShippingInfo = async (req, res) => {
  try {
    await Shipping.findByIdAndDelete(req.params.id);
    res.json({ message: 'Shipping info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete shipping info' });
  }
};
