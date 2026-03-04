import express from "express";
import postController from "./post.controller.js";

const router = express.Router();

// CRUD
import { protect } from "../../middleware/auth.middleware.js";

router.post("/", protect, postController.create);
router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);

router.patch("/:id/like", postController.toggleLike);

export default router;