const mongoose = require("mongoose");

let holidaySchema = new mongoose.Schema(
    {
    name: {type: String},
    date: {type: Date,},
    },
    {timestamps: true}
);

let holidayModel = mongoose.model("Holiday",holidaySchema);
module.exports = { holidayModel };