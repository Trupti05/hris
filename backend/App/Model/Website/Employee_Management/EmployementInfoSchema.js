const mongoose = require("mongoose");

let employementSchema = new mongoose.Schema(
  {
    hireDate: { type: String },
    joiningDate: { type: String },
    basicSalary: { type: Number },
    paymentMethod: { type: String },
    employeeType: { type: String },
    bankName: { type: String },
    accountTitle: { type: String },
    location: { type: String },
    designation: { type: String },
    department: { type: String },
    employeeCode: { type: String },
    separationDate: { type: String },
    status: { type: String }, // e.g., "Active", "Inactive"
    branch: { type: String },
    branchCode: { type: String },
    accountNo: { type: String },
    swiftCode: { type: String },
    cnic: { type: String },
    profileName: {type: String},
  },
  { timestamps: true }
);

let EmployementModel = mongoose.model("Employement", employementSchema);
module.exports = { EmployementModel };