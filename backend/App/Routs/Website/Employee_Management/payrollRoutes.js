const express = require('express');
const { savePayrollData } = require("../../../Controller/Website/Employee_Management/payroll");

const payrollRoutes = express.Router();

payrollRoutes.post('/payroll', savePayrollData);

module.exports = {payrollRoutes};