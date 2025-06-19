let express = require("express");
const { EmployementModel } = require("../../../Model/Website/Employee_Management/EmployementInfoSchema")
const { EmployementInfo,getEmployeement, getEmployeementbyId } = require("../../../Controller/Website/Employee_Management/EmployementInfo");

let employementInfoRoutes = express.Router();

employementInfoRoutes.post('/employementinfo', EmployementInfo);

employementInfoRoutes.get('/employementinfo', getEmployeement);
employementInfoRoutes.get("/employementinfo/:employeeName", getEmployeementbyId);

module.exports = { employementInfoRoutes };
