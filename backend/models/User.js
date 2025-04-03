const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  enroller: {
    type: String,
    required: true,
    description: "Name of the person who referred the user"
  },
  package: {
    type: String,
    required: true
  },
  referrals: {
    type: Number,
    default: 0
  },
  points: {
    type: Number,
    default: 0
  },
  rank: {
    type: String,
    default: 'Not Ranked'
  },
  earnings: {
    type: Number,
    default: 0
  },
  isTempPassword: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  if (this.password.startsWith('$2a$')) return next(); // Skip if already hashed
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema); 