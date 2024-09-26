import express from 'express';
import {
  createAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
} from '../controllers/AdminController.js';

const router = express.Router();

router.post('/', createAdmin);
router.get('/', getAllAdmins);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

export default router;
