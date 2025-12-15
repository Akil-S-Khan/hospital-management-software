import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import connectDB from "./utility/connectDB.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
let DATABASE_URL = process.env.DATABASE_URL
const server = express();


//connecting server to db 
connectDB(DATABASE_URL)

server.get("/", (req, res) => {
    res.send("Welcome to backend : HOSPITAL MANAGEMENT SOFTWARE");
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
