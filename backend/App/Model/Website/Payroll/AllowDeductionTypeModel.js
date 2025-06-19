let {mongoose} = require("mongoose")

let allowDeductionTypeSchema=new mongoose.Schema(
    {
        type:String,
        name:String,
        description:String
    },
    {
        timeStamp:true
    }

  
)
let allowDeductionTypeModel = mongoose.model("AllowDeductionType",allowDeductionTypeSchema)

module.exports={allowDeductionTypeModel}