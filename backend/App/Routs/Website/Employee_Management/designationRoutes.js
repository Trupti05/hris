let express = require("express");
const { designation, viewDesignation, editDesignation, deleteDesignation } = require("../../../Controller/Website/Employee_Management/designation");


let designationRoutes = express.Router();

// Route to create a new department
designationRoutes.post("/designation", designation);

// Route to view all departments
designationRoutes.get("/viewdesignation", viewDesignation);

// Route to edit an existing department by id
designationRoutes.put("/editdesignation/:id", editDesignation);


// Route to delete a department by id
designationRoutes.delete("/deletedesignation/:id", deleteDesignation);


module.exports = { designationRoutes };
