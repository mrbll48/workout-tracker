const { Schema, model } = require("mongoose");

const photoSchema = new Schema({
  picture: {
    type: String,
  },
});

const Photo = model("Photos", photoSchema);

module.exports = Photo;
