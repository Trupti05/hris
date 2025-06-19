const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
    securityRole: { type: String, enum: ['Admin', 'Manager', 'User', 'Guest', 'HR', 'COD', 'HOD', 'Second In', 'None'], default: 'None' },
    leaveEntryDays: { type: Number, default: 0 },
    password: { type: String }, // Remember to hash this
    recordLevelAuthority: {
        cod: { type: Boolean, default: false },
        hr: { type: Boolean, default: false },
        hod: { type: Boolean, default: false },
        secondIn: { type: Boolean, default: false }
    }
}, { timestamps: true });

let SecurityModel = mongoose.model('Security', securitySchema);
module.exports = { SecurityModel };