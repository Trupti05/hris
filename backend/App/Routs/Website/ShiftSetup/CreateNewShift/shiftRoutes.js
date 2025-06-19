const express = require("express");
const { shiftController } = require("../../../../Controller/Website/ShiftSetup/CreateNewShift/ShiftController.js");
const shiftRoutes = express.Router();


shiftRoutes.post("/setShift", shiftController.setShift);
shiftRoutes.get("/getShift", shiftController.getShift);

module.exports = {shiftRoutes};