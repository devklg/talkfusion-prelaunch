const User = require("../models/User");
exports.getSignups = async (req, res) => {
  const users = await User.find().select("name createdAt");
  res.json(users);
}; 