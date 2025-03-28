const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Signup", SignupSchema); 