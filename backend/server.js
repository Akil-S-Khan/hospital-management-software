import express, { urlencoded, json } from "express";
import connectDB from "./utils/DatabaseConnection.js";
import PatientRouter from "./routes/patient-route.js";
import MedicineRouter from "./routes/medicine-route.js";
import DoctorRouter from "./routes/doctors-routes.js";
import Appointment from "./routes/appointment-route.js";
import EducationContentRouter from "./routes/education-content-route.js";
import UserRouter from "./routes/user-route.js";
import DashboardRouter from "./routes/dashboard-route.js";
import ConversationRouter from "./routes/conversation-route.js";
import MessageRouter from "./routes/message-route.js";
import { config } from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);

// socket.io server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Initializations
config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(urlencoded({ extended: false }));
app.use(json());

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
      const user = await findById(senderId);

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
  console.log(`Server running at PORT ${PORT}`);
});
