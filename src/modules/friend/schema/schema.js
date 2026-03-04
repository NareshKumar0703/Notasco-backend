// Friend schema for managing friend requests
import mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
  who: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  whom: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
    required: true
  }
}, { timestamps: true });

const Friend = mongoose.model('Friend', friendSchema);
export default Friend;