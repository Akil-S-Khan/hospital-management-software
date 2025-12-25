const { mongoose, Model } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  role: { type: String },
  email: { unique: true, type: String },
  password: { type: String },
});

const Users = mongoose.model("users", UserSchema);

module.exports = Users;
