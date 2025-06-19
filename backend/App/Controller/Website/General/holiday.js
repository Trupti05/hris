let fs = require("fs");
const { holidayModel } = require("../../../Model/Website/General/holidaySchema");

let createHoliday = async (req, res) => {
    console.log(req.body);

    let { name, date } = req.body;

    let holidayData = {
        name,
        date,
    };

    let resObj;

    try {
        let newHoliday = new holidayModel(holidayData);
        let savedHoliday = await newHoliday.save();
        console.log("Holiday details saved successfully:", savedHoliday);

        resObj = {
            status: 1,
            msg: "Holiday details saved successfully.",
            holiday: savedHoliday,
        };
        res.send(resObj);
    } catch (error) {
        console.error("Error saving holiday details:", error);
        resObj = {
            status: 0,
            msg: "Error occurred while saving holiday details.",
            error: error.message // Include error message for debugging
        };
        res.status(500).send(resObj); // Send 500 status code for server errors
    }
};

let getAllHolidays = async (req, res) => {
    try {
        const holidays = await holidayModel.find();
        res.send({
            status: 1,
            msg: "Holidays retrieved successfully.",
            holidays: holidays,
        });
    } catch (error) {
        console.error("Error retrieving holidays:", error);
        res.status(500).send({
            status: 0,
            msg: "Error occurred while retrieving holidays.",
            error: error.message
        });
    }
};

module.exports = { createHoliday, getAllHolidays };