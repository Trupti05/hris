let express = require("express");
const { LeaveBalance, BalanceImage } = require("../../../Controller/Website/Leave/leaveBalance");
const { uploads } = require("../../../Middleware/Website/employeeFileUpload");
let leaveBalanceRoute = express.Router();
leaveBalanceRoute.post('/leaveBalance', uploads('uploads/BalanceImage').single('leaveimage'), BalanceImage)


module.exports={leaveBalanceRoute}