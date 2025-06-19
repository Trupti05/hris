let express = require("express");
const { createHoliday, getAllHolidays } = require("../../../Controller/Website/General/holiday");

let holidayRoutes = express.Router();

holidayRoutes.post("/holidays", createHoliday);
holidayRoutes.get("/holidays",getAllHolidays);

module.exports = { holidayRoutes };