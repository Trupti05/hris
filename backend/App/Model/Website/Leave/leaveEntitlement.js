const mongoose = require("mongoose");

const leaveEntitlementSchema = new mongoose.Schema({
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, // Referencing Department model
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}, // Referencing Employee model
  leavetype: { type: String, required: true },
  year: { type: Number, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  noDays: { type: Number, required: true },
  // Add other fields as needed, e.g., createdBy, approvedBy, etc.
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const LeaveEntitlementModel = mongoose.model("LeaveEntitlement", leaveEntitlementSchema);

module.exports = { LeaveEntitlementModel };