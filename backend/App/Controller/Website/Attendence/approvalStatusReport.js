const { approvalStatusReportModel } = require("../../../Model/Website/Attendence/approvalStatusReportModel");

const approvalStatusReport = async (req, res) => {
    console.log("Headers:", req.headers); // Debugging headers
    console.log("Body:", req.body); // Debugging request body

    if (!Array.isArray(req.body) || req.body.length === 0) {
        return res.status(400).json({ error: "Invalid request body" });
    }

    // Extract relevant fields for each entry
    const extractedData = req.body.map((item) => ({
        employeeType: item.employeeType || "Unknown",
        leaveType: item.leaveType,
        leavePeriod: item.leavePeriod,
        leaveFromDate: item.leaveFromDate,
        leaveToDate: item.leaveToDate,
        remarks: item.remarks,
        status: item.status,
    }));

    try {
        // Step 1: Delete all previous records
        await approvalStatusReportModel.deleteMany({});
        console.log("Previous data deleted successfully");

        // Step 2: Insert new incoming data
        const savedData = await approvalStatusReportModel.insertMany(extractedData);
        console.log("New Data Saved:", savedData);

        return res.status(201).json({ message: "Data updated successfully", data: savedData });
    } catch (error) {
        console.error("Error saving data:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
// send data stored in this database at front end include accept and reject
const getApprovalStatusReport = async (req, res) => {
    try {
        const storedData = await approvalStatusReportModel.find({});
        if (storedData.length === 0) {
            return res.status(404).json({ message: "No records found" });
        }
        return res.status(200).json({ data: storedData });
    } catch (error) {
        console.error("Error retrieving data:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { approvalStatusReport,getApprovalStatusReport };
