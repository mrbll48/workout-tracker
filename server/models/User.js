const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// basic structure of User model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
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
  // friends: [userSchema],
});

// TODO: hash password

// TODO: validate input password for logging in

// TODO: virtuals?

const User = model("User", userSchema);

module.exports = User;
