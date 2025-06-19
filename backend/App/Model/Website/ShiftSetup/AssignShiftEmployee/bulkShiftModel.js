const mongoose = require("mongoose");

let bulkShiftSchema = new mongoose.Schema(
   {
      Department:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"department"
      },
      Employee:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"employee"
      },
      SelectedDate:{
            type:Date,
            required:true
      },
      SelectedShift:{
         type:String,
         enums:["Day Shift","OverNight Shift"]
      }
      
});

const BulkShift = mongoose.model("BulkShift", bulkShiftSchema);   
module.exports = { BulkShift };

