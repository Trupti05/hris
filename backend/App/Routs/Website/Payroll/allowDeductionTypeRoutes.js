let express = require("express")
const { allowDeductionType } = require("../../../Controller/Website/Payroll/allowDeductionType")

let allowDeductionRoutes =express.Router()
allowDeductionRoutes.post("/allowdeductiontyperoutes",allowDeductionType)

module.exports={allowDeductionRoutes}
