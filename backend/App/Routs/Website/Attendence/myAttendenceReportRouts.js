let express = require("express");
const { myattendencereport } = require("../../../Controller/Website/Attendence/myattendencereport");



let myAttendenceReportRouts =express.Router();
myAttendenceReportRouts.get('/myattendencereport',myattendencereport)

module.exports={myAttendenceReportRouts}