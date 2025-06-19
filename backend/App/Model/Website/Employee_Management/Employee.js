const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "None"], required: true },
    departmentName: { type: String },
    dateOfBirth: { type: Date },
    streetAddress: { type: String },
    city: { type: String },
    postalCode: { type: String },
    country: { type: String },
    profileImage: { type: String }, // Store image URL or base64 string
  },
  { timestamps: true }
);

let EmployeeModel = mongoose.model("Employee", employeeSchema);
module.exports = { EmployeeModel };
