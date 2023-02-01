import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);//데이터베이스에 올라온 게시글들을 모두다 보여주는 것이다 
router.get("/:userId/posts", verifyToken, getUserPosts);//userId에 맞는 사람의 게시글만 보여준다 

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);//좋아요 표시 하는 기능 

export default router;