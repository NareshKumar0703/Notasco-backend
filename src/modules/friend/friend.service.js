
import Friend from './schema/schema.js';

const FriendService = {
  async addFriend(who, whom) {
    // Prevent duplicate requests
    const exists = await Friend.findOne({ who, whom });
    if (exists) throw new Error('Friend request already sent');
    const friend = new Friend({ who, whom, status: 'pending' });
    return await friend.save();
  },

  async removeFriend(who, whom) {
    const result = await Friend.findOneAndDelete({
      $or: [
        { who, whom },
        { who: whom, whom: who }
      ],
      status: 'accepted'
    });
    if (!result) throw new Error('Friendship not found');
    return result;
  },

  async acceptFriend(who, whom) {
    const friend = await Friend.findOneAndUpdate(
      { who, whom, status: 'pending' },
      { status: 'accepted' },
      { new: true }
    );
    if (!friend) throw new Error('Friend request not found');
    return friend;
  },

  async rejectFriend(who, whom) {
    const friend = await Friend.findOneAndUpdate(
      { who, whom, status: 'pending' },
      { status: 'rejected' },
      { new: true }
    );
    if (!friend) throw new Error('Friend request not found');
    return friend;
  }
};

export default FriendService;
