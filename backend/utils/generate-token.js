const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  const payload = { id: user._id, email: user.email };
  const token = await jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

module.exports = { generateToken };
