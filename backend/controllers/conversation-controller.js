import Conversations from "../models/conversation-model.js";

// API to get All Doctors
const getConversations = async (req, res) => {
  const { userId } = req.params;
  try {
    const conversations = await find({
      members: { $in: [userId] },
    });

    const conversationList = Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = await conversation.members.find(
          (member) => member != userId
        );
        const adminUser = await _findById(receiverId);

        if (adminUser) {
          return {
            user: {
              id: receiverId,
              name: adminUser.name,
              email: adminUser.email,
            },
            conversationId: conversation._id,
          };
        } else {
          const patient = await findById(receiverId);
          return {
            user: { id: receiverId, name: patient.name, email: patient.email },
            conversationId: conversation._id,
          };
        }
      })
    );

    res.json(await conversationList);
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive conversations",
      error,
    });
  }
};

// API to add new Doctors
const newConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const newConversation = await Conversations({
      members: [senderId, receiverId],
    });

    await newConversation.save().then(() =>
      res.json({
        success: true,
        message: "Conversation started successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to start conversation",
      serverMessage: error,
    });
  }
};

export { newConversation, getConversations };
