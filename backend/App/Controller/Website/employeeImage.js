let fs = require("fs");
const { employeeImageModel } = require("../../Model/Website/employeeImage");

let employeeImage = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    if (!req.file || !req.file.filename) {
        return res.status(400).json({ status: 0, msg: "No file uploaded." });
    }

    console.log(req.file.filename);

    let obj = {}; // Initialize obj to avoid reference errors
    obj['employeeFile'] = req.file.filename; 

    try {
        let employeeUploadImage = new employeeImageModel(obj);
        let employeeRes = await employeeUploadImage.save();
        console.log("Employee image uploaded successfully", employeeRes);

        return res.json({
            status: 1,
            msg: "Data saved successfully.",
            employeeRes,
        });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during registration.",
        });
    }
};

module.exports = { employeeImage };
