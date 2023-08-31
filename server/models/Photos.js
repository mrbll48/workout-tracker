const { Schema, model } = require("mongoose");

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
});

const Photo = model("Photos", photoSchema);

module.exports = Photo;
