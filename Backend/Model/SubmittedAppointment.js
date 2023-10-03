//import mongoose

const mongoose = require("mongoose");

//make a db schema to store employee attendace data

const SubmittedAppointmentsSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },

  vehicleType: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  fuelType: {
    type: String,
    required: true,
  },

  volume: {
    type: String,
    required: true,
  },
});

//pass the schema
module.exports = mongoose.model(
  "SubmittedAppointment",
  SubmittedAppointmentsSchema
);
