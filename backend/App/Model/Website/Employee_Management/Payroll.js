const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  pf: {
    type: { type: String, enum: ['Percentage', 'Fixed', 'None'] },
    employerContribution: { type: Number },
    employeeContribution: { type: Number },
  },
  sses: {
    type: { type: String, enum: ['Percentage', 'Fixed', 'None'] },
    employerContribution: { type: Number },
    employeeContribution: { type: Number },
  },
  eobi: {
    type: { type: String, enum: ['Percentage', 'Fixed', 'None'] },
    employerContribution: { type: Number },
    employeeContribution: { type: Number },
  },
}, { timestamps: true });

let PayrollModel = mongoose.model('Payroll', payrollSchema);
module.exports = { PayrollModel };