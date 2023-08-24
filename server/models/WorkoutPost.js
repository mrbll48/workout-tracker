const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Workout post schema
const workoutPostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const WorkoutPost = model("WorkoutPost", workoutPostSchema);

module.exports = WorkoutPost;
