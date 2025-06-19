const { departmentModel } = require("../../../Model/Website/Employee_Management/departmentModel");

// Department creation with validation and detailed error logging
let department = async (req, res) => {
    console.log("Received Data:", req.body);

    let { departmentName } = req.body;

    if (!departmentName) {
        return res.status(400).json({
            status: 0,
            msg: "All required fields must be provided.",
            enteredData: req.body
        });
    }

    let obj = { departmentName };

    try {
        let newDepartmentEntry = new departmentModel(obj);
        let depRes = await newDepartmentEntry.save();

        return res.json({
            status: 1,
            msg: "Department created successfully.",
            enteredData: req.body,
            savedData: depRes
        });
    } catch (error) {
        console.error("Error during department creation:", error);

        return res.status(500).json({
            status: 0,
            msg: "Error occurred during department creation.",
            error: error.message // Provide specific error message for better debugging
        });
    }
};

// View all departments
let viewDepartment = async (req, res) => {
    try {
        const departments = await departmentModel.find();

        if (!departments || departments.length === 0) {
            return res.status(404).json({
                status: 0,
                msg: "No departments found."
            });
        }

        return res.json({
            status: 1,
            msg: "Departments retrieved successfully.",
            departments
        });
    } catch (error) {
        console.error("Error during department retrieval:", error);

        return res.status(500).json({
            status: 0,
            msg: "Error occurred during department retrieval.",
            error: error.message // Provide detailed error message for better debugging
        });
    }
};

let editDepartment = async (req, res) => {
    let { id } = req.params;
    let { departmentName } = req.body;
  
    if (!departmentName) {
      return res.status(400).json({
        status: 0,
        msg: "Department name is required.",
      });
    }
  
    try {
      // Find and update department by ID
      const updatedDepartment = await departmentModel.findByIdAndUpdate(id, { departmentName }, { new: true });
  
      if (!updatedDepartment) {
        return res.status(404).json({
          status: 0,
          msg: "Department not found.",
        });
      }
  
      return res.json({
        status: 1,
        msg: "Department updated successfully.",
        updatedDepartment,
      });
    } catch (error) {
      console.error("Error during department update:", error);
      return res.status(500).json({
        status: 0,
        msg: "Error occurred during department update.",
        error: error.message,
      });
    }
  };
  
  

let deleteDepartment = async (req, res) => {
    let { id } = req.params; // Get the department ID from the request parameters

    try {
        // Find and delete the department by its ID
        const deletedDepartment = await departmentModel.findByIdAndDelete(id);

        // If no department is found, return a 404 status
        if (!deletedDepartment) {
            return res.status(404).json({
                status: 0,
                msg: "Department not found."
            });
        }

        // Successfully deleted the department, return the deleted department
        return res.json({
            status: 1,
            msg: "Department deleted successfully.",
            deletedDepartment
        });
    } catch (error) {
        // Log the error for debugging and return a 500 status
        console.error("Error during department deletion:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during department deletion.",
            error: error.message // Provide a detailed error message for debugging
        });
    }
};



module.exports = { department, viewDepartment, editDepartment, deleteDepartment };
