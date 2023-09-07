const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Workout post schema
const workoutPostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  exercise: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  sets: {
    type: String,
    required: true,
  },
  reps: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  likes: {
    type: Number,
  },
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const WorkoutPost = model("WorkoutPost", workoutPostSchema);

module.exports = WorkoutPost;
