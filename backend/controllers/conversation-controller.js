const Conversations = require("../models/conversation-model");
const Patients = require("../models/patient-model");
const Users = require("../models/user-model");

// API to get All Doctors
const getConversations = async (req, res) => {
  const { userId } = req.params;
  try {
    const conversations = await Conversations.find({
      members: { $in: [userId] },
    });

    const conversationList = Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = await conversation.members.find(
          (member) => member != userId
        );
        const adminUser = await Users.findById(receiverId);

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
          const patient = await Patients.findById(receiverId);
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

module.exports = { newConversation, getConversations };
