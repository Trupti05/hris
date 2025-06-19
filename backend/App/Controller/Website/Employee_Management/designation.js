const { designationtModel } = require("../../../Model/Website/Employee_Management/designationModel");

// Designation creation with validation and detailed error logging
let designation = async (req, res) => {
    console.log("Received Data:", req.body);
    let { designationName } = req.body;

    // Validate required fields
    if (!designationName) {
        return res.status(400).json({
            status: 0,
            msg: "All required fields must be provided.",
            enteredData: req.body
        });
    }

    // Create the designation object to be saved
    let obj = { designationName };

    try {
        // Create a new designation entry in the database
        let newDesignationEntry = new designationtModel(obj);
        let desRes = await newDesignationEntry.save();

        // Return response with saved data
        return res.json({
            status: 1,
            msg: "Designation created successfully.",
            enteredData: req.body,
            savedData: desRes
        });
    } catch (error) {
        // Log the error and return response
        console.error("Error during designation creation:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during designation creation.",
            error: error.message
        });
    }
};

// View all designations
let viewDesignation = async (req, res) => {
    try {
        const designations = await designationtModel.find();

        if (!designations || designations.length === 0) {
            return res.status(404).json({
                status: 0,
                msg: "No designations found."
            });
        }

        return res.json({
            status: 1,
            msg: "Designations retrieved successfully.",
            designations
        });
    } catch (error) {
        console.error("Error during designation retrieval:", error);

        return res.status(500).json({
            status: 0,
            msg: "Error occurred during designation retrieval.",
            error: error.message
        });
    }
};

// Edit a designation by ID
let editDesignation = async (req, res) => {
    let { id } = req.params;
    let { designationName } = req.body;  // Ensure the property name is 'designationName' (not 'designationtName')

    if (!designationName) {
        return res.status(400).json({
            status: 0,
            msg: "Designation name is required.",
        });
    }

    try {
        // Find and update designation by ID
        const updatedDesignation = await designationtModel.findByIdAndUpdate(id, { designationName }, { new: true });

        if (!updatedDesignation) {
            return res.status(404).json({
                status: 0,
                msg: "Designation not found.",
            });
        }

        return res.json({
            status: 1,
            msg: "Designation updated successfully.",
            updatedDesignation,
        });
    } catch (error) {
        console.error("Error during designation update:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during designation update.",
            error: error.message,
        });
    }
};

// Delete a designation by ID
let deleteDesignation = async (req, res) => {
    let { id } = req.params; // Get the designation ID from the request parameters

    try {
        // Find and delete the designation by its ID
        const deletedDesignation = await designationtModel.findByIdAndDelete(id);

        // If no designation is found, return a 404 status
        if (!deletedDesignation) {
            return res.status(404).json({
                status: 0,
                msg: "Designation not found."
            });
        }

        // Successfully deleted the designation, return the deleted designation data
        return res.json({
            status: 1,
            msg: "Designation deleted successfully.",
            deletedDesignation
        });
    } catch (error) {
        // Log the error for debugging and return a 500 status
        console.error("Error during designation deletion:", error);
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during designation deletion.",
            error: error.message // Provide a detailed error message for debugging
        });
    }
};

module.exports = { designation, viewDesignation, editDesignation, deleteDesignation };
