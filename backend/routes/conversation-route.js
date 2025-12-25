const {
  newConversation,
  getConversations,
} = require("../controllers/conversation-controller");

const router = require("express").Router();

router.post("/new-conversation", newConversation);
router.get("/conversation/:userId", getConversations);

module.exports = router;
