
import express from 'express';
import FriendController from './friend.controller.js';
import { protect } from '../../middleware/auth.middleware.js';

const router = express.Router();

router.post('/add', protect, FriendController.addFriend);
router.post('/remove', protect, FriendController.removeFriend);
router.post('/accept', protect, FriendController.acceptFriend);
router.post('/reject', protect, FriendController.rejectFriend);

// List friends for the authenticated user
router.get('/my-friends', protect, FriendController.listMyFriends);
// List friends for any user by userId param
router.get('/user/:userId/friends', protect, FriendController.listUserFriends);

export default router;
