import pkg from "jsonwebtoken";
const { sign } = pkg;

const generateToken = async (user) => {
  const payload = { id: user._id, email: user.email };
  const token = await sign(payload, process.env.JWT_SECRET);
  return token;
};

export default generateToken;
