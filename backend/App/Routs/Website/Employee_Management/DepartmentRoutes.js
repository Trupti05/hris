let express = require("express");
const { department, viewDepartment, editDepartment, deleteDepartment } = require("../../../Controller/Website/Employee_Management/department");

let departmentRoutes = express.Router();

// Route to create a new department
departmentRoutes.post("/department", department);

// Route to view all departments
departmentRoutes.get("/viewdepartment", viewDepartment);

// Route to edit an existing department by id
departmentRoutes.put("/editdepartment/:id", editDepartment);


// Route to delete a department by id
departmentRoutes.delete("/deletedepartment/:id", deleteDepartment);


module.exports = { departmentRoutes };
