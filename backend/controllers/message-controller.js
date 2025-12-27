import Conversations from "../models/conversation-model.js";
import Messages from "../models/message-model.js";
import Users from "../models/user-model.js";

// API to get All Doctors
const getMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    if (!conversationId) return res.json([]);

    const messageData = await find({ conversationId });

    const messageList = Promise.all(
      messageData.map(async (message) => {
        const adminUser = await Users.findById(message.senderId);

        if (adminUser) {
          return {
            user: {
              id: adminUser._id,
              name: adminUser.name,
              email: adminUser.email,
            },
            message: message.message,
          };
        } else {
          const patient = await findById(message.senderId);
          return {
            user: { id: patient._id, name: patient.name, email: patient.email },
            message: message.message,
          };
        }
      })
    );

    res.json(await messageList);
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive messages",
      error,
    });
  }
};

// API to add new Doctors
const newMessage = async (req, res) => {
  const { conversationId, senderId, message, receiverId } = req.body;

  try {
    if (!senderId || !message || !receiverId) {
      return res.send("All data is required");
    }
    if (!conversationId) {
      const newConversation = await Conversations({
        members: [senderId, receiverId],
      });

      await newConversation.save();

      res.send("Conversation started successfully");
    } else {
      const newMessage = new Messages({ conversationId, senderId, message });
      await newMessage.save().then(() =>
        res.json({
          success: true,
          message: "Message created successfully",
        })
      );
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to create message",
      serverMessage: error,
    });
  }
};

export { newMessage, getMessages };
