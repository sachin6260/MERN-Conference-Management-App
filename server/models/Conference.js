const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Conference = mongoose.model("Conference", conferenceSchema);
module.exports = Conference;
