// let leaveentitlement =(req,res)=>{
//     console.log(req.body)
//     res.send("Form Submitted Successfully")
// }

// module.exports={leaveentitlement}

const {
    LeaveEntitlementModel,
  } = require("../../../Model/Website/Leave/leaveEntitlement");
  const {
    DepartmentModel,
  } = require("../../../Model/Website/Employee_Management/departmentModel"); 
  const {
    EmployeeModel,
  } = require("../../../Model/Website/Employee_Management/Employee"); 
  
  let leaveentitlement = async (req, res) => {
    try {
      const { department, employee, leavetype, year, fromDate, toDate, noDays } =
        req.body;
  
      // // Check if department and employee exist
      // const existingDepartment = await DepartmentModel.findById(department);
      // if (!existingDepartment) {
      //   return res.status(400).json({ status: 0, msg: "Department not found" });
      // }
      // const existingEmployee = await EmployeeModel.findById(employee);
      // if (!existingEmployee) {
      //   return res.status(400).json({ status: 0, msg: "Employee not found" });
      // }
  
      
  
      const newLeaveEntitlement = new LeaveEntitlementModel({
        department,
        employee,
        leavetype,
        year,
        fromDate,
        toDate,
        noDays,
      });
  
      const savedLeaveEntitlement = await newLeaveEntitlement.save();
  
      res.status(201).json({
        // 201 Created is more appropriate
        status: 1,
        msg: "Leave entitlement saved successfully",
        leaveentitlement: savedLeaveEntitlement,
      });
    } catch (error) {
      console.error("Error saving leave entitlement:", error);
      res
        .status(500)
        .json({ status: 0, msg: "Internal server error", error: error.message }); // Send error message for debugging
    }
  };
  
  let getDepartmentsAndEmployees = async (req, res) => {
      try {
        const departments = await DepartmentModel.find();
        const employees = await EmployeeModel.find();
    
        res.status(200).json({  // 200 OK is appropriate here
          status: 1,
          departments: departments,
          employees: employees,
        });
      } catch (error) {
        console.error("Error fetching departments and employees:", error);
        res.status(500).json({ status: 0, msg: "Internal server error", error: error.message });
      }
    };
    
    
    module.exports = { leaveentitlement, getDepartmentsAndEmployees };