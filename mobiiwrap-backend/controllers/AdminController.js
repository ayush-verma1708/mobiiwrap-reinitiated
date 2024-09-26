import Admin from '../models/Admin.js';

// Create Admin
export const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newAdmin = new Admin({ name, email, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Could not create admin' });
  }
};

// Get All Admins
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch admins' });
  }
};

// Update Admin
export const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Could not update admin' });
  }
};

// Delete Admin
export const deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete admin' });
  }
};
