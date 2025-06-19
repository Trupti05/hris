const { mongoose } = require("mongoose");



let shiftSchema = new mongoose.Schema(
  {
    shiftName: {
      type: String,
      enum: ["Day Shift", "OverNight Shift"],
       required: true
    },
    assignedEmployee:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",  // Reference to the Employee model
    },
    shiftIn: {
      type: String, // Store as a formatted time string (e.g., "9:00:00 AM")
    },
    shiftOut: {
      type: String, // Store as a formatted time string (e.g., "2:00:00 PM")
    },
    shiftOutNextDay: {
      type: String,
      enum: ["Day Shift", "OverNight Shift"]
    },
  },
  {
    timestamps: true,
  }
);




const shiftModel = mongoose.model("Shift", shiftSchema);
module.exports = { shiftModel };
