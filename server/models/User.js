const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// sub-schema for FRIENDS to avoid issues (circular dependency)
const friendSchema = new Schema({
  username: String,
  email: String,
}, { _id: false });

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
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  friends: [friendSchema],

// hash password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);  // whats wrong w await?
  }
  next();
});

// validate input password for logging in
userSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// virtuals - to create a profileName from username & email
userSchema.virtual('profileName').get(function () {
  return `${this.username} (${this.email})`;
});

const User = model("User", userSchema);

module.exports = User;
