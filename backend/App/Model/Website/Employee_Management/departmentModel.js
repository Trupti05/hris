const {mongoose} =require('mongoose')

let departmentSchema = new mongoose.Schema({
    departmentName:String
},
{
    timeStamp:true
}
)

let departmentModel = mongoose.model('department',departmentSchema)

module.exports={departmentModel}