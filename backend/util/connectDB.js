import mongoose from "mongoose";

let connectDb = (DATABASE_URL) => {
  return mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("sever connected to database successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDb;
