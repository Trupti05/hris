const fs = require("fs");
const { EmployeeModel } = require("../../../Model/Website/Employee_Management/Employee");
const { default: mongoose } = require("mongoose");

// Employee Info - Create Employee Entry
const EmployeeInfo = async (req, res) => {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    let { name, gender, departmentName, dateOfBirth, streetAddress, city, postalCode, country } = req.body;

    let employeeData = {
        name,
        gender,
        departmentName,
        dateOfBirth,
        streetAddress,
        city,
        postalCode,
        country,
    };

    if (!name || !gender) {
        return res.status(400).json({ status: 0, msg: "Name and gender are required fields." });
    }

    try {
        const employeeData = {
            name,
            gender,
            departmentName,
            dateOfBirth,
            streetAddress,
            city,
            postalCode,
            country,
            profileImage: req.file?.filename || null, // Handle profile image
        };

        const newEmployee = new EmployeeModel(employeeData);
        const savedEmployee = await newEmployee.save();

        console.log("Employee details saved successfully:", savedEmployee);

        return res.json({
            status: 1,
            msg: "Employee details saved successfully.",
            employee: savedEmployee,
        });
    } catch (error) {
        console.error("Error saving employee details:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred while saving employee details.",
        });
    }
};

let getAllEmployeDetails = async (req, res) => {
    try {
        const data = await EmployeeModel.find();
        console.log("data", data);

        return res.status(200).json({
            success: true,
            message: 'EmployeDetails Fetch Successfully',
            data: data // Include the fetched data in the response
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

let getEmployees = async (req, res) => {
    try {
        const employees = await EmployeeModel.find();
        res.json({ status: 1, employees: employees });
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ status: 0, msg: "Internal server error" });
    }
};


// onlye send Employee Name 
const getAllEmployeeNames = async (req, res) => {
    try {
        // Fetch all employees and return only the 'name' field
        const employees = await EmployeeModel.find({},"");

        if (!employees || employees.length === 0) {
            return res.status(404).json({ status: 0, msg: "No employees found" });
        }

        // Extract names from employee objects
        // const employeeNames = employees.map(emp => emp.name);

        return res.json({ status: 1, employees });
    } catch (error) {
        console.error("Error fetching employee names:", error);
        return res.status(500).json({ status: 0, msg: "Error fetching employee names" });
    }
};


module.exports = { EmployeeInfo, getEmployees, getAllEmployeeNames, getAllEmployeDetails };
