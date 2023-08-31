const { Schema, model } = require("mongoose");

const photoSchema = new Schema({
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
