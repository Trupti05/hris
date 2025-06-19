let express = require("express")
const { leaveEntry, getAllLeaveEntries } = require("../../../Controller/Website/Leave/leaveentry")
const {  getAllEmployeeNames, getEmployees } = require("../../../Controller/Website/Employee_Management/EmployeeInfo")

let leaveEntryRoutes = express.Router()

leaveEntryRoutes.post("/leaveentry",leaveEntry)
leaveEntryRoutes.get("/leaveentrydata",getAllEmployeeNames)
leaveEntryRoutes.get("/leaveentryalldata",getAllLeaveEntries)

module.exports={leaveEntryRoutes}