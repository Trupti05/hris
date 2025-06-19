const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: String,
}, { timestamps: true });

let FileModel = mongoose.model('File', fileSchema);
module.exports = { FileModel };