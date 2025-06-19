const PunchInModel = require('../../../Model/Website/Attendence/OnlinePunch');
const  {EmployeeModel } = require('../../../Model/Website/Employee_Management/Employee');

// exports.OnlinePunch = async (req, res) => {
//   try {
//     const { name, date, day, time, punchIn, punchOut, status } = req.body;
//     console.log(name, date, day, time, punchIn, punchOut, status);

//     // Validate required fields
//     if (!name || !date, !day, !time, !punchIn, !punchOut, !status) {
//       return res.status(400).json({
//         success: false,
//         message: "Text and Punch Type are required"
//       });
//     }

//     const punchInEntry = await PunchInModel.create({ name, date, day, time, punchIn, punchOut, status });

//     return res.status(201).json({
//       success: true,
//       message: "Online Punch Data Successfully Saved in DataBase",
//       data: punchInEntry
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: "getting err"
//     });
//   }
// };
exports.getAllData = async (req, res) => {
  try {
    const data = await PunchInModel.find();
    console.log("Fetched Data:", data);

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching data",
      error: err.message,
    });
  }
};

// // ✅ Handle Punch-In & Punch-Out
exports.OnlinePunch = async (req, res) => {
  try {
    const { name, date, day, time, punchIn, punchOut } = req.body;

    if (!name || !date || !day || !time) {
      return res.status(400).json({
        success: false,
        message: "Name, Date, Day, and Time are required",
      });
    }

    // Check if the user already has a Punch-In record for today
    let punchEntry = await PunchInModel.findOne({ name, date });

    if (punchEntry) {
      // ✅ If a Punch-In record exists and no Punch-Out is recorded, update it
      if (!punchEntry.punchOut) {
        punchEntry.punchOut = time; // Update Punch-Out time
        punchEntry.status = "Completed"; // Mark as completed
        await punchEntry.save();

        return res.status(200).json({
          success: true,
          message: "Punch-Out recorded successfully",
          data: punchEntry,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Punch-Out already recorded for today",
        });
      }
    } else {
      // ✅ If no Punch-In record exists, create a new entry
      punchEntry = new PunchInModel({
        name,
        date,
        day,
        time,
        punchIn: time,
        punchOut: null,
        status: "Pending",
      });

      await punchEntry.save();

      return res.status(201).json({
        success: true,
        message: "Punch-In recorded successfully",
        data: punchEntry,
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error saving punch data",
      error: err.message,
    });
  }
};

// exports.getAllPunchDetails = async (req, res) => {
//   console.log("EmployeeModel:", EmployeeModel);
//   try {
//     const data = await PunchInModel.find().lean();
//     // Fetch all punch data
//     const employeeNames = data.map((entry) => entry.name); // Extract employee names
    

//     // ✅ Fetch employee details in a single query
//     const employees = await EmployeeModel.find({ name: { $in: employeeNames } }).lean();

//     // ✅ Create a map of employees for quick lookup
//     const employeeMap = {};
//     employees.forEach((emp) => {
//       employeeMap[emp.name] = emp;
//     });

//     // ✅ Attach department and other details to punch data
//     const punchDetails = data.map((entry) => ({
//       ...entry,
//       department: employeeMap[entry.name]?.departmentName || "Unknown",
//       gender: employeeMap[entry.name]?.gender || "N/A",
//       city: employeeMap[entry.name]?.city || "N/A",
//       country: employeeMap[entry.name]?.country || "N/A",
//     }));

//     return res.status(200).json({
//       success: true,
//       message: "All Punch Details Fetched Successfully",
//       data: punchDetails,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: "Error fetching punch details",
//       error: err.message,
//     });
//   }
// };
exports.getAllPunchDetails = async (req, res) => {
  try {
    // Fetch all punch details
    const punchData = await PunchInModel.find({}, { name: 1, date: 1, punchIn: 1, punchOut: 1, status: 1, _id: 0 });

    // Extract unique employee names from punch data
    const employeeNames = [...new Set(punchData.map(entry => entry.name))];

    // Fetch employee details based on names
    const employees = await EmployeeModel.find({ name: { $in: employeeNames } }, { name: 1, departmentName: 1, _id: 0 });

    // Create a map of employees for quick lookup
    const employeeMap = {};
    employees.forEach(emp => {
      employeeMap[emp.name] = emp.departmentName || "Not Found"; // Default if department is missing
    });

    // Merge punch details with department info
    const punchDetailsWithDepartment = punchData.map(entry => ({
      name: entry.name,
      department: employeeMap[entry.name] || "Not Found",
      date: entry.date,
      punchIn: entry.punchIn,
      punchOut: entry.punchOut,
      status: entry.status
    }));

    return res.status(200).json({
      success: true,
      message: "Punch Details with Department Fetched Successfully",
      data: punchDetailsWithDepartment,
    });

  } catch (error) {
    console.error("Error fetching punch details:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching punch details",
      error: error.message,
    });
  }
};