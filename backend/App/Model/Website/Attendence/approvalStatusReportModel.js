const { mongoose } = require("mongoose");

let approvalStatusReportSchema = new mongoose.Schema(
    {   
        employeeType: String,
        leaveType: String,
        leavePeriod: String,
        leaveFromDate: String,
        leaveToDate: String,
        remarks: String,
        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected"], // Allowed values
            default: "Pending" // Default status
        }
    },
    {
        timestamps: true // Fix the typo (timestamps)
    }
);

let approvalStatusReportModel = mongoose.model("ApprovalStatusReport", approvalStatusReportSchema);

module.exports = { approvalStatusReportModel };
