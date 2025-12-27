import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  conversationId: { type: String },
  senderId: { type: String },
  message: { type: String },
});

const Messages = mongoose.model("messages", MessageSchema);

export default Messages;
