const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  name: String,
  nation: String,
  age: Number,
});
module.exports = mongoose.model("Barca_A", "playerSchema");
    