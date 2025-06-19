let express = require("express");
const { employeeImage } = require("../../Controller/Website/employeeImage");
const { uploads } = require("../../Middleware/Website/employeeFileUpload");
let employeeRoutes = express.Router();
employeeRoutes.post('/employeedashboard', uploads('uploads/EmployeeImage').single('employeeFile'), employeeImage)


module.exports={employeeRoutes}