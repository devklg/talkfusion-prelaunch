const mongoose = require("mongoose");
const EarningsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Earnings", EarningsSchema); 