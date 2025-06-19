const { leaveEntryModel } = require("../../../Model/Website/Leave/leaveEntryModel");


// Leave Entry
let leaveEntry = async (req, res) => {
    // console.log(req.body);
    let { employeeType ,leaveType, leavePeriod, leaveFromDate, leaveToDate, remarks } = req.body;
    if (!employeeType|| !leaveType || !leavePeriod || !leaveFromDate || !leaveToDate) {
        return res.status(400).json({ status: 0, msg: "All required fields must be provided." });
    }
    let obj = {
        employeeType,
        leaveType,
        leavePeriod,
        leaveFromDate,
        leaveToDate,
        remarks,  
    };

    try {
        let newLeaveEntry = new leaveEntryModel(obj);
        let leaveRes = await newLeaveEntry.save();
        return res.json({
            status: 1,
            msg: "Data saved successfully.",
            leaveRes,
        });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during registration.",
        });
    }
};

// To view all enteries in leabveentry model

let getAllLeaveEntries = async (req, res) => {
    try {
        let allLeaveEntries = await leaveEntryModel.find();  // Fetch full documents
        console.log("Fetched Leave Entries:", allLeaveEntries); // Debugging log

        return res.json({
            status: 1,
            data: allLeaveEntries, // Ensure the response contains all fields
        });
    } catch (error) {
        console.error("Error fetching leave entries:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred while fetching leave entries.",
        });
    }
};


module.exports = { leaveEntry, getAllLeaveEntries };


