import express from "express";
const router = express.Router();
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from "../middlewares/auth.js";

router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/like-post", auth, likePost);

export default router;
