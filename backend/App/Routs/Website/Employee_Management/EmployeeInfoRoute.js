let express = require("express");
const {
    EmployeeInfo,
    getEmployees
} = require("../../../Controller/Website/Employee_Management/EmployeeInfo");
const { uploads } = require("../../../Middleware/Website/employeeFileUpload");

let employeeInfoRoutes = express.Router();

employeeInfoRoutes.post(
    '/employeeinfo',
    uploads('uploads/EmployeeInfoImage').single('profileImage'),
    EmployeeInfo
);

employeeInfoRoutes.get('/employeeinfo', getEmployees);

module.exports = { employeeInfoRoutes };
