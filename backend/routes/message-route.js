const {
  newMessage,
  getMessages,
} = require("../controllers/message-controller");

const router = require("express").Router();

router.post("/new-message", newMessage);
router.get("/message/:conversationId", getMessages);

module.exports = router;
