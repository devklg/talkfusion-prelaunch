const User = require("../models/User");
exports.getEarnings = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ earnings: user.earnings });
}; 