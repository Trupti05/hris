const mongoose = require("mongoose");

const punchInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  punchIn: {
    type: String,
    // required: true,
  },
  punchOut: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending", // Default status value
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PunchIn", punchInSchema);
