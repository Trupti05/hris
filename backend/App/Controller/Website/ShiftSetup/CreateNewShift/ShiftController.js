// const {
//   shiftModel,
// } = require("../../../../Model/Website/ShiftSetup/CreateNewShift/shiftModel.js");
// const {
//   EmployeeModel,
// } = require("../../../../Model/Website/Employee_Management/Employee.js");

// const shiftController = {

//   setShift: async (req, res) => {
//     try {
//       const {
//         shiftName,
//         assignedEmployee,
//         shiftIn,
//         shiftOut,
//         shiftOutNextDay,
//       } = req.body;

//       //data
//       let savedShift = await shiftModel.create({
//         shiftName,
//         assignedEmployee,
//         shiftIn,
//         shiftOut,
//         shiftOutNextDay,
//       });
//       // console.log(req.body);
//       // console.log("Shift details saved successfully:", savedShift);
//       return res.status(201).json({ msg: "Shift details saved successfully.",savedShift });
//     } catch (error) {
//       console.error("Error saving shift details:", error);
//       return res
//         .status(500)
//         .json({ status: 0, msg: "Error occurred during shift creation."});
//     }
//   },

//   getShift: async (req, res) => {
//     try {
//       const shifts = await shiftModel.find();
//       return res.json({ msg: "Shifts retrieved successfully.", shifts });
//     } catch (error) {
//       console.error("Error retrieving shifts:", error);
//       return res
//         .status(500)
//         .json({
//           msg: "Error occurred during shift retrieval.",
//           error: error.message,
//         });
//     }
//   },
// };

// module.exports = { shiftController };


const {
  shiftModel,
} = require("../../../../Model/Website/ShiftSetup/CreateNewShift/shiftModel.js");
const {
  EmployeeModel,
} = require("../../../../Model/Website/Employee_Management/Employee.js");

const shiftController = {
  // Create a New Shift
  setShift: async (req, res) => {
    try {
      const { shiftName, assignedEmployee, shiftIn, shiftOut, shiftOutNextDay } = req.body;

      // Validate required fields
      if (!shiftName || !shiftIn || !shiftOut) {
        return res.status(400).json({ msg: "Missing required fields." });
      }

      // Create a new shift
      const savedShift = await shiftModel.create({
        shiftName,
        assignedEmployee,
        shiftIn,
        shiftOut,
        shiftOutNextDay,
      });

      return res.status(201).json({ msg: "Shift details saved successfully.", savedShift });
    } catch (error) {
      console.error("Error saving shift details:", error);
      return res.status(500).json({ msg: "Internal Server Error.", error: error.message });
    }
  },

  // Retrieve All Shifts
  getShift: async (req, res) => {
    try {
      const shifts = await shiftModel.find().populate("assignedEmployee", "name email"); // Populating employee details
      return res.status(200).json({ msg: "Shifts retrieved successfully.", shifts });
    } catch (error) {
      console.error("Error retrieving shifts:", error);
      return res.status(500).json({ msg: "Internal Server Error.", error: error.message });
    }
  },
};

module.exports = { shiftController };
