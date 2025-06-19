let express = require("express")
const { approvalStatusReport, getApprovalStatusReport } = require("../../../Controller/Website/Attendence/approvalStatusReport")

let approvalStatusReportsRoutes =express.Router();

approvalStatusReportsRoutes.post("/approvalstatusreport",approvalStatusReport)
approvalStatusReportsRoutes.get("/approvalstatusreport",getApprovalStatusReport)

module.exports={approvalStatusReportsRoutes}

