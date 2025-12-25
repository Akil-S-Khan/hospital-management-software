import { newMessage, getMessages } from "../controllers/message-controller.js";
import express from "express";
const router = express.Router();

router.post("/new-message", newMessage);
router.get("/message/:conversationId", getMessages);

export default router;
