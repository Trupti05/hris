const { SecurityModel } = require('../../../Model/Website/Employee_Management/security');

let saveSecurityData = async (req, res) => {
    try {
        const { securityRole, leaveEntryDays, password, recordLevelAuthority } = req.body;

        const newSecurity = new SecurityModel({
            securityRole,
            leaveEntryDays,
            password,
            recordLevelAuthority
        });

        const savedSecurity = await newSecurity.save();

        res.status(201).json({
            status: 1,
            msg: 'Security data saved successfully.',
            security: savedSecurity
        });
    } catch (error) {
        console.error('Error saving security data:', error);
        res.status(500).json({
            status: 0,
            msg: 'Error occurred while saving security data.',
            error: error.message
        });
    }
};

module.exports = { saveSecurityData };