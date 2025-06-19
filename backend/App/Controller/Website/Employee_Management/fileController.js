const { FileModel } = require('../../../Model/Website/Employee_Management/file');

let uploadFile = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                status: 0,
                message: 'No files were uploaded.'
            });
        }

        const uploadedFile = req.files.file;

        const newFile = new FileModel({
            fileName: uploadedFile.name
        });

        const savedFile = await newFile.save();

        res.status(201).json({
            status: 1,
            msg: 'Filename saved successfully.',
            file: savedFile
        });
    } catch (error) {
        console.error('Error saving filename:', error);
        res.status(500).json({
            status: 0,
            msg: 'Error occurred while saving filename.',
            error: error.message
        });
    }
};

module.exports = { uploadFile };