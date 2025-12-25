const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const io = require("socket.io")(8080, {
  cors: { origin: true },
});
const connectDB = require("./utils/DatabaseConnection");
const PatientRouter = require("./routes/patient-route.js");
const MedicineRouter = require("./routes/medicine-route.js");
const DoctorRouter = require("./routes/doctor-route.js");
const Appointment = require("./routes/appointment-route.js");
const EducationContentRouter = require("./routes/education-content-route.js");
const UserRouter = require("./routes/user-route.js");
const DashboardRouter = require("./routes/dashboard-route.js");
const ConversationRouter = require("./routes/conversation-route.js");
const MessageRouter = require("./routes/message-route.js");
const Users = require("./models/user-model.js");
// Initializations
dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB Connection
connectDB(process.env.MONGODB_URL);

// Chat Socket
let users = [];
io.on("connection", (socket) => {
  console.log("Socket Connected");
  socket.on("addUser", (userId) => {
    const doesUserExist = users.find((user) => user.userId == userId);
    if (!doesUserExist) {
      const user = { userId, socketId: socket.id };
      users.push(user);
      socket.emit("getUsers", users);
    }
  });

  socket.on(
    "sendMessage",
    async ({ senderId, message, conversationId, receiverId }) => {
      const receiver = users.find((user) => user.userId == receiverId);
      const sender = users.find((user) => user.userId == senderId);
      const user = await Users.findById(senderId);

      io.to(receiver.socketId).to(sender.socketId).emit("getMessage", {
        senderId,
        message,
        conversationId,
        receiverId,
        user,
      });
    }
  );

  socket.on("disconnect", () => {
    users = users.filter((user) => user.socketId != socket.id);
    io.emit("getUsers", users);
  });
});

// Endpoints
app.use("/api", DashboardRouter);
app.use("/api", PatientRouter);
app.use("/api", MedicineRouter);
app.use("/api", DoctorRouter);
app.use("/api", Appointment);
app.use("/api", UserRouter);
app.use("/api", EducationContentRouter);
app.use("/api", ConversationRouter);
app.use("/api", MessageRouter);

// Port Initializaton
const PORT = process.env.PORT || 8080;

// Server Listening
app.listen(PORT, () => {
  console.log("Server running at PORT 8000");
});
