const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: { type: String},
    homePhone: { type: String},
    workPhone: { type: String },
    emergencyContact: { type: String,},
    emergencyPhone: { type: String,},
    profileName: { type: String},
    contactImage: { type: String },
}, { timestamps: true });

let ContactModel = mongoose.model('Contact', contactSchema);
module.exports = { ContactModel };