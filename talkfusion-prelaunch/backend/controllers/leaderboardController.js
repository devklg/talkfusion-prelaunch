const User = require("../models/User");

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ referrals: -1 }).limit(10).select("name referrals");
  res.json(users);
}; 