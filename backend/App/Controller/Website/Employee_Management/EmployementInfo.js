const { EmployementModel } = require("../../../Model/Website/Employee_Management/EmployementInfoSchema");

let EmployementInfo = async (req, res) => {
  console.log(req.body);

  let { 
    hireDate, joiningDate, basicSalary, paymentMethod, employeeType, 
    bankName, accountTitle, location, designation, department, employeeCode, 
    separationDate, status, branch, branchCode, accountNo, swiftCode, cnic, profileName 
  } = req.body;

  let employeeData = {
    hireDate, joiningDate, basicSalary, paymentMethod, employeeType, 
    bankName, accountTitle, location, designation, department, employeeCode, 
    separationDate, status, branch, branchCode, accountNo, swiftCode, cnic, profileName 
  };


  let resObj;

  try {
    let newEmployement = new EmployementModel(employeeData);
    let savedEmployement = await newEmployement.save();
    console.log("Employee details saved successfully:", savedEmployement);

    resObj = {
      status: 1,
      msg: "Employee details saved successfully.",
      employee: savedEmployement,
    };
    res.send(resObj);
  } catch (error) {
    console.error("Error saving employee details:", error);
    resObj = {
      status: 0,
      msg: "Error occurred while saving employee details.",
      error: error.message // Include the error message for debugging
    };
    res.send(resObj);
  }
};

let getEmployeement = async (req, res) => {
  try {
      const employees = await EmployementModel.find();
      res.json({ status: 1, employees: employees });
  } catch (error) {
      console.error("Error fetching employees:", error);
      res.status(500).json({ status: 0, msg: "Internal server error" });
  }
};

let getEmployeementbyId = async (req, res) => {
  const { employeeName } = req.params;
  console.log("Request for employee:", employeeName); // Add logging

  try {
    const employees = await EmployementModel.findOne({ profileName: employeeName });
    if (employees) {
      res.json({ status: 1, employees: employees });
    } else {
      res.status(404).json({ status: 0, msg: "Employee not found" });
    }
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ status: 0, msg: "Internal server error" });
  }
};


module.exports = { EmployementInfo, getEmployeement, getEmployeementbyId };
