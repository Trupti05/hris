let express = require("express");
const { saveSecurityData } = require("../../../Controller/Website/Employee_Management/securityController");

let securityRoutes = express.Router();

securityRoutes.post("/security", saveSecurityData);

module.exports = {securityRoutes};