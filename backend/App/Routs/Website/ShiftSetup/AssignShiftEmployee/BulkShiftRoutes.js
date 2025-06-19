const express = require("express");
const { bulkShiftController } = require("../../../../Controller/Website/ShiftSetup/AssignShiftEmployee/BulkShiftController.js");
const bulkShiftRoutes = express.Router();

bulkShiftRoutes.post("/setBulkShift", bulkShiftController.setBulkShift);

module.exports = { bulkShiftRoutes };