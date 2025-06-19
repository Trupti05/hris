const { mongoose } = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    employeeFile: String,
  },
  { timestamps: true } 
);

let employeeImageModel = mongoose.model("EmployeeImage", userSchema);
module.exports = { employeeImageModel };
