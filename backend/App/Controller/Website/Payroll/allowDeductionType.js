const { allowDeductionTypeModel } = require("../../../Model/Website/Payroll/AllowDeductionTypeModel");

let allowDeductionType=async(req,res)=>{
    
    console.log(req.body)

    let {type,name,description}=req.body
    if (!type || !name || !description) {
        return res.status(400).json({ status: 0, msg: "All required fields must be provided." });
    }
    let obj={
        type,
        name,
        description
    }
    try{
        let newDeductionTypeEntry = new allowDeductionTypeModel(obj)
        let dedRes = await newDeductionTypeEntry.save()
        return res.json({
            status: 1,
            msg: "Data saved successfully.",
            dedRes,
        });
    }catch (error) {
        console.error("Error during registration:", error);

        // Return an error response if the operation fails
        return res.status(500).json({
            status: 0,
            msg: "Error occurred during registration.",
        });
    }

}

module.exports={allowDeductionType}