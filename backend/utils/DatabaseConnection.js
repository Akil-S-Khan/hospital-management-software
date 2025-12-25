const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
