const {BulkShift} = require("../../../../Model/Website/ShiftSetup/AssignShiftEmployee/bulkShiftModel")

const  bulkShiftController = {
   setBulkShift: async (req, res) => {
      try{
        const bulkShift = new BulkShift(req.body);
        console.log(req.body);
        await bulkShift.save();
        res.status(201).json({ message: "Bulk shift set successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error setting bulk shift" });  
       }
     }

   }
   module.exports = { bulkShiftController };