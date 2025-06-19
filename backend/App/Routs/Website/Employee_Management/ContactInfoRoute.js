let express = require("express");
const { ContactInfo } = require("../../../Controller/Website/Employee_Management/ContactInfo");
const { uploads } = require("../../../Middleware/Website/employeeFileUpload");

let contactInfoRoutes = express.Router();

// Route to handle contact info update with file upload
contactInfoRoutes.post(
  "/contactinfo",
  uploads("uploads/ContactInfoImage").single("contactImage"),
  ContactInfo
);

module.exports = { contactInfoRoutes };
