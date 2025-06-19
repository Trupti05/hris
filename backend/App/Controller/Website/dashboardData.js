const { departmentModel } = require("../../Model/Website/Employee_Management/departmentModel");

let DashboardDAta = async (req, res) => {
    try {
        // Aggregate to group by department name (case-insensitive)
        let departmentCounts = await departmentModel.aggregate([
            {
                $project: {
                    departmentName: { $toLower: "$departmentName" } // Convert to lowercase
                }
            },
            {
                $group: {
                    _id: "$departmentName",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    departmentName: "$_id",
                    count: 1
                }
            }
        ]);
        
        res.json(departmentCounts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching department data", error });
    }
};


module.exports = { DashboardDAta };
