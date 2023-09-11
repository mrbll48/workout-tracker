const { Schema, Types } = require("mongoose");

const commentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => {
      new Types.ObjectId();
    },
  },
  commentText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  by: {
    type: String,
    required: true,
  },
});

module.exports = commentSchema;
