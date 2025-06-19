let fs = require("fs");
const { ContactModel } = require("../../../Model/Website/Employee_Management/EmployeeContact");

let ContactInfo = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    let { email, homePhone, workPhone, emergencyContact, emergencyPhone, profileName } = req.body;

    let contactData = {
        email,
        homePhone,
        workPhone,
        emergencyContact,
        emergencyPhone,
        profileName,
    };

    let resObj;

    try {
        let newContact = new ContactModel(contactData);
        let savedContact = await newContact.save();
        console.log("Contact details saved successfully:", savedContact);

        resObj = {
            status: 1,
            msg: "Contact details saved successfully.",
            contact: savedContact,
        };
        res.send(resObj);
    } catch (error) {
        console.error("Error saving contact details:", error);
        resObj = {
            status: 0,
            msg: "Error occurred while saving contact details.",
        };
        res.send(resObj);
    }
};

module.exports = { ContactInfo };
