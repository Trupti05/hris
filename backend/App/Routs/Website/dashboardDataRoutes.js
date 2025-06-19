let express = require("express")
const { DashboardDAta } = require("../../Controller/Website/dashboardData")

let dashboarDataRoutes = express.Router()
dashboarDataRoutes.get("/dashboard",DashboardDAta)

module.exports={dashboarDataRoutes}