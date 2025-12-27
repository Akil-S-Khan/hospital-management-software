import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
  members: { type: Array },
});

const Conversations = mongoose.model("conversations", ConversationSchema);

export default Conversations;
