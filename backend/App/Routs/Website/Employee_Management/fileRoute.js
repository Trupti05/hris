let express = require("express");
const uploadFile = require("../../../Controller/Website/Employee_Management/fileController");
const fileUpload = require('express-fileupload');

let fileRoute = express.Router();

fileRoute.use(fileUpload());
fileRoute.post("/upload", uploadFile);

module.exports = {fileRoute};