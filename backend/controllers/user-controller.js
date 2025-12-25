const Users = require("../models/user-model");
const bcryptjs = require("bcryptjs");
const { hashPassword } = require("../utils/hash-password");
const { generateToken } = require("../utils/generate-token");

// API to authenticate user
const VerifyUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email: email });

    if (!user) {
      res.json({
        success: false,
        message: "User not found",
      });
    } else {
      const verify = await bcryptjs.compare(password, user?.password);

      const token = await generateToken(user);
      console.log("This is token");

      if (verify) {
        res.json({
          success: true,
          message: "User authenticated successfully",
          token,
          user,
        });
      } else {
        res.json({
          success: false,
          message: "Invalid Password",
        });
      }
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to retrive User data",
    });
  }
};

const AddUser = async (req, res) => {
  const { name, role, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    await Users.create({
      name: name,
      role: role,
      email: email,
      password: hashedPassword,
    }).then(() =>
      res.json({
        success: true,
        message: "User added successfully",
      })
    );
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add user",
    });
  }
};

module.exports = { VerifyUser, AddUser };
