const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  prime: {
    type: Boolean,
    default: false,
  },
});

const User = new mongoose.model("User_info", userSchema);
module.exports = User;
