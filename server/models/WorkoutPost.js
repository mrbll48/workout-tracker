const { Schema, model } = require("mongoose");

// Workout post schema bruh
const workoutPostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    comments: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        text: String,
        date: {
            type: Date,
            default: Date.now,
        },
    }],
});

const WorkoutPost = model("WorkoutPost", workoutPostSchema);

module.exports = WorkoutPost;
