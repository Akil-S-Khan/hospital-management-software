const { mongoose } = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  members: { type: Array },
});

const Conversations = mongoose.model("conversations", ConversationSchema);

module.exports = Conversations;
