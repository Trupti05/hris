let fs = require("fs");

let BalanceImage =(req,res)=>{
       
        // console.log(req.body)
        console.log(req.file)

        // let obj;
        // if (req.file && req.file.filename) {
        //     obj['leaveimage'] = req.file.filename;
        // }

        // let resObj;

    res.send("Hello");

}

module.exports={BalanceImage}