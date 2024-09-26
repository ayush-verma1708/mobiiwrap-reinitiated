import express from 'express';
import {
  createNotification,
  getUserNotifications,
  updateNotification,
  deleteNotification,
  markNotificationAsRead,
} from '../controllers/NotificationController.js';

const router = express.Router();

router.post('/', createNotification);
router.get('/:userId', getUserNotifications);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);
router.put('/read/:id', markNotificationAsRead);

export default router;
