import {
  newConversation,
  getConversations,
} from "../controllers/conversation-controller.js";
import express from "express";
const router = express.Router();

router.post("/new-conversation", newConversation);
router.get("/conversation/:userId", getConversations);

export default router;
