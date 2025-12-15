import express from "express";
import dotenv from "dotenv";
import connectDb from "./util/connectDB.js";
dotenv.config();
let PORT = process.env.PORT || 8000;
let DATABASE_URL = process.env.DATABASE_URL;
let server = express();

// connecting server to database
connectDb(DATABASE_URL);
server.get("/", (req, res) => {
  res.send("Welcome to backend of Hospital Management Software");
});

server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

// MVC
