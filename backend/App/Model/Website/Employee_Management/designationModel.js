const {mongoose} =require('mongoose')

let designationSchema = new mongoose.Schema({
    designationName:String
},
{
    timeStamp:true
}
)

let designationtModel = mongoose.model('designation',designationSchema)

module.exports={designationtModel}