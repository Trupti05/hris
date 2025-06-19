const express = require("express");
const cors = require("cors");
const path = require('path');
let mongoose = require("mongoose")
const { mainRouts } = require("./App/mainRouts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(mainRouts);

// Serve static files from 'uploads/EmployeeImage'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/uploads/BalanceImage", express.static("uploads/BalanceImage"));



mongoose.connect(`mongodb://127.0.0.1:27017/HRISPROJECT`)
.then(() => {
    console.log("Connected to MongoDB");
  })
app.listen("8000")
