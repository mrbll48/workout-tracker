const { Schema, model } = require("mongoose");
const commentSchema = require("./Comments");

const photoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  by: {
    type: String,
  },
  comments: [commentSchema],
});

const Photo = model("Photos", photoSchema);

module.exports = Photo;
