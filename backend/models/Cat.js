const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
});

module.exports = mongoose.model("Cat", CatSchema);
