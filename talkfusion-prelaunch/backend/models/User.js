const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  isTempPassword: {
    type: Boolean,
    default: true
  },
  enroller: String,
  package: String,
  referrals: { type: Number, default: 0 },
  earnings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("User", UserSchema); 