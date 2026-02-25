import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: {
        type: String,
        required: true,
        trim: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    likes: {
      type: Number,
      default: 0,
    },

    comments: {
      type: Number,
      default: 0,
    },

    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],

    visibility: {
      type: String,
      enum: ["PUBLIC", "PRIVATE", "FOLLOWERS"],
      default: "PUBLIC",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);