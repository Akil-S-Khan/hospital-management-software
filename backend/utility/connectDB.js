//connected db using mongoose

import mongoose from "mongoose";

const connectDB = (DATABASE_URL) => {
    return mongoose
        .connect(DATABASE_URL)
        .then(() => {
            console.log("Database connected successfully by vaishnavi");
        })
        .catch((err) => {
            console.error("Database connection error:", err.message);
        });
};

export default connectDB;
