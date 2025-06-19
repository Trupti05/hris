const {mongoose} = require ("mongoose")

let leaveEntrySchema = new mongoose.Schema(
    {   
        employeeType:String,
        leaveType:String,
        leavePeriod:String,
        leaveFromDate:String,
        leaveToDate:String,
        remarks:String,
    },
    {
        timeStamps:true
    }

)


let leaveEntryModel = mongoose.model("LeaveEntry",leaveEntrySchema)

module.exports={leaveEntryModel}