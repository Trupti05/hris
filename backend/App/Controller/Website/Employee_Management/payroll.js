const { PayrollModel } = require('../../../Model/Website/Employee_Management/Payroll');

let savePayrollData = async (req, res) => {
  try {
    const { pf, sses, eobi } = req.body;

    const newPayroll = new PayrollModel({
      pf,
      sses,
      eobi,
    });

    const savedPayroll = await newPayroll.save();

    res.status(201).json({
      status: 1,
      msg: 'Payroll data saved successfully.',
      payroll: savedPayroll,
    });
  } catch (error) {
    console.error('Error saving payroll data:', error);
    res.status(500).json({
      status: 0,
      msg: 'Error occurred while saving payroll data.',
      error: error.message,
    });
  }
};

module.exports = { savePayrollData };