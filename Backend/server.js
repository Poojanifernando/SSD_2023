//import express to invoke with the app
const express = require("express");

// import cors to disable the cors policy error
const cors = require("cors");

//import body-paser to convert json format data in to server objects
const bodyParser = require("body-parser");

//import mongoose
const mongoose = require("mongoose");

//import Routes
//ramona routes
const user = require("./Routes/userRoutes");
const fuel = require("./Routes/AddFuel");
const stock = require("./Routes/Stock");

//anodya routes
const TimetableRoutes = require("./Routes/TimetableRoutes");
const FuelReportRoutes = require("./Routes/FuelReportRoutes");

//Disni Routes
const EmpAttendace = require("./Routes/EmpAttendace");
const EmpLeaveForm = require("./Routes/EmpLeaveForm");
const EmpSalary = require("./Routes/EmpSalary");

//sandeepa Routes
const submittedAppointment = require("./Routes/sumbittedAppointments");

//invoke app
const app = express();

//declare the port to run the backend
const PORT = process.env.PORT || 5000;

//middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config();

//use server to communicate with routes
//disni
app.use(EmpAttendace);
app.use(EmpLeaveForm);
app.use(EmpSalary);

//ramona
app.use("/user", user);
app.use(fuel);
app.use(stock);

//anodya
app.use(TimetableRoutes);
app.use(FuelReportRoutes);

//sandeepa
app.use(submittedAppointment);

//connect the app with mongo db with mongoose
mongoose
  .connect(process.env.DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`Backend App is running on ${PORT}`);
});
