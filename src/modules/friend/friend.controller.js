
import FriendService from './friend.service.js';
import { successResponse, errorResponse } from '../../utils/apiResponse.js';

const FriendController = {
  async addFriend(req, res) {
    try {
      const { whom } = req.body;
      const who = req.user._id;
      const result = await FriendService.addFriend(who, whom);
      return successResponse(res, 'Friend request sent', result);
    } catch (err) {
      return errorResponse(res, err.message);
    }
  },

  async removeFriend(req, res) {
    try {
      const { whom } = req.body;
      const who = req.user._id;
      const result = await FriendService.removeFriend(who, whom);
      return successResponse(res, 'Friend removed', result);
    } catch (err) {
      return errorResponse(res, err.message);
    }
  },

  async acceptFriend(req, res) {
    try {
      const { who } = req.body;
      const whom = req.user._id;
      const result = await FriendService.acceptFriend(who, whom);
      return successResponse(res, 'Friend request accepted', result);
    } catch (err) {
      return errorResponse(res, err.message);
    }
  },

  async rejectFriend(req, res) {
    try {
      const { who } = req.body;
      const whom = req.user._id;
      const result = await FriendService.rejectFriend(who, whom);
      return successResponse(res, 'Friend request rejected', result);
    } catch (err) {
      return errorResponse(res, err.message);
    }
  },

  // List friends for the authenticated user
  async listMyFriends(req, res) {
    try {
      const user = req.user;
      if (!user) return errorResponse(res, 'User not found', 404);
      // Populate friends array with user details
      await user.populate({ path: 'friends', select: 'firstName lastName email' });
      return successResponse(res, 'Friends list retrieved', user.friends);
    } catch (err) {
      return errorResponse(res, err.message);
    }
  },

  // List friends for any user by userId param
  async listUserFriends(req, res) {
    try {
      const userId = req.params.userId;
      const User = (await import('../user/schema/schema.js')).default;
      const user = await User.findById(userId).populate('friends', 'firstName lastName email');
      if (!user) return errorResponse(res, 'User not found', 404);
      return successResponse(res, 'Friends list retrieved', user.friends);
    } catch (err) {
      return errorResponse(res, err.message);
    }
  }
};

export default FriendController;
