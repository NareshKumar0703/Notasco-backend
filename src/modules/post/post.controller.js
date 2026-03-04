import postService from "./post.service.js";

class PostController {
  // CREATE
  async create(req, res) {
    try {
      console.log(req);
      const post = await postService.create({
        author: req.user._id,
        ...req.body,
      });

      return res.status(201).json({
        success: true,
        message: "Post created",
        data: post,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // GET ALL
  async getAll(req, res) {
    try {
      const posts = await postService.findAll({
        $or: [{ visibility: "PUBLIC" }, { author: req.user._id }],
      });
      return res.json({
        success: true,
        data: posts,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // GET BY ID
  async getById(req, res) {
    try {
      const post = await postService.findById(req.params.id);
      if (!post) {
        return res
          .status(404)
          .json({ success: false, message: "Post not found" });
      }
      return res.json({ success: true, data: post });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const post = await postService.update(req.params.id, req.body);
      if (!post) {
        return res
          .status(404)
          .json({ success: false, message: "Post not found" });
      }
      return res.json({
        success: true,
        message: "Post updated",
        data: post,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // SOFT DELETE
  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);
      if (!post) {
        return res
          .status(404)
          .json({ success: false, message: "Post not found" });
      }
      return res.json({
        success: true,
        message: "Post deleted",
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // TOGGLE LIKE
  async toggleLike(req, res) {
    try {
      const { userId } = req.body;
      const post = await postService.toggleLike(req.params.id, userId);

      if (!post) {
        return res
          .status(404)
          .json({ success: false, message: "Post not found" });
      }

      return res.json({
        success: true,
        message: "Like updated",
        data: post,
      });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export default new PostController();
