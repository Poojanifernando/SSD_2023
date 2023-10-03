//import express
const express = require("express");
const SubmittedAppointment = require("../Model/SubmittedAppointment");

//import db schema
const SubmitAppointment = require("../Model/SubmittedAppointment");

//give access to request function through express router
const router = express.Router();

//Create function
router.post("/SubmitAppointment/Save", (req, res) => {
  let newAppointment = new SubmittedAppointment(req.body);

  newAppointment.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    return res.status(200).json({
      success: "Appointment added successfully",
      record: newAppointment,
    });
  });
});

//Get all Appointments

router.get("/GetAllAppointments", (req, res) => {
  SubmitAppointment.find().exec((err, allAppointment) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingData: allAppointment,
    });
  });
});

//get one appointment

router.get("/GetOneAppointment/:id", (req, res) => {
  let Appointment_ID = req.params.id;

  SubmitAppointment.findById(Appointment_ID, (err, oneAppointment) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
      });
    }
    return res.status(200).json({
      success: true,
      oneAppointment,
    });
  });
});

//update an appointment

router.put("/UpdateAppointment/:id", (req, res) => {
  SubmitAppointment.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, updateAppointment) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated Successfully",
      });
    }
  );
});

//delete an appointment

router.delete("/DeleteAppointment/:id", (req, res) => {
  SubmitAppointment.findByIdAndRemove(req.params.id).exec(
    (err, deleteAppointment) => {
      if (err) {
        return res.status(400).json({
          message: "Delete was unsuccessful",
          err,
        });
      }
      return res.json({
        message: "Deleted Successfully",
        deleteAppointment,
      });
    }
  );
});

module.exports = router;
