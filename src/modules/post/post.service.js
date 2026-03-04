import Post from "./schema/schema.js";

class PostService {
  async create(data) {
    return await Post.create(data);
  }

  async findAll(query = {}) {
    return await Post.find({ isDeleted: false, ...query })
    .populate("author", "firstName lastName email")
    .sort({ createdAt: -1 });
  }

  async findById(id) {
    return await Post.findById(id);
  }

  async update(id, data) {
    return await Post.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Post.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
  }

  async toggleLike(postId, userId) {
    const post = await Post.findById(postId);
    if (!post) return null;

    const index = post.likedBy.findIndex(
      (id) => id.toString() === userId
    );

    if (index > -1) {
      post.likedBy.splice(index, 1);
      post.likes = Math.max(0, post.likes - 1);
    } else {
      post.likedBy.push(userId);
      post.likes += 1;
    }

    await post.save();
    return post;
  }
}

export default new PostService();