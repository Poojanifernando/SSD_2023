import * as React from "react";
//import React, { Component } from "react";
//import "../node_modules/bootstrap/scss/bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
//import { Container, Row, Col, Button, Form } from "react-bootstrap";
//import "../../../public/index.html";
import { useNavigate } from "react-router";
import appointmentimage from "../../img/Appointment.jpg";

function SubmitAppointment() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  let navigate = useNavigate();

  const handleVehicleType = (event) => {
    setVehicleType(event.target.value);
  };

  const handleFuelType = (event) => {
    setFuleType(event.target.value);
  };

  function submitButton(e) {
    e.preventDefault();
    console.log("start function");
    if (
      vehicleNumber == "" ||
      vehicleType == "" ||
      date == "" ||
      fuelType == "" ||
      volume == ""
    ) {
      alert("Fill All The Details!");
    } else {
      const newAppointment = {
        vehicleNumber,
        vehicleType,
        date,
        fuelType,
        volume,
      };

      console.log(newAppointment);
      axios
        .post("http://localhost:5000/SubmitAppointment/Save", newAppointment)
        .then((res) => {
          alert("Appointment Submitted");
          console.log(res);
          localStorage.setItem("Appointment_ID", res.data.record._id);

          // console.log(localStorage.getItem("Appointment_ID"));
          navigate("/ViewSubmittedAppointment/" + res.data.record._id);
        })
        .catch((err) => {});
    }
  }

  return (
<div style={{
      backgroundImage: `url(${appointmentimage})`,
      backgroundSize: "cover",
    }} >
    <div className="register-form" >
      <div
        style={{
          height: "60px",
          backgroundColor: "#FA9c1B",
         marginTop: "-100px",
        }}
      >
        <h1 className="heading">Make An Appointment</h1>
      </div>
<center>
  
      <table>
        <br />

        <tr>
          <td>
            <div>
              <form
                style={{ backgroundColor: "#ebecf0" , marginTop: "20px", width:"500px"}}
                onSubmit={(e) => submitButton(e)}
              >
                <div className="Sandeepa">
                 <br/>
                  <label className="form-label">
                    <h4>&nbsp; Vehicle Number :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h4>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    maxLength={7}
                    class="form-control"
                    placeholder="ABCXXXX"
                    name="vehicleNumber"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="form-label">
                    <h4>&nbsp; Vehicle Type : </h4>
                  </label>
                  <input
                    type="text"
                    list="type"
                    class="form-control"
                    name="vehicleType"
                    placeholder="Select"
                    value={vehicleType}
                    onChange={(e) => handleVehicleType(e)}
                    required
                  />
                  <datalist id="type">
                    <option value="Car">Car</option>
                    <option value="Van">Van</option>
                    <option value="SUV">SUV</option>
                    <option value="Lorry">Lorry</option>
                    <option value="Bus">Bus</option>
                    <option value="Bike">Bike</option>
                    <option value="ThreeWheel">ThreeWheel</option>
                  </datalist>
                </div>
                <br />
                <div className="form-group">
                  <label className="form-label">
                    <h4>&nbsp; Date : </h4>
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="12 May 2016"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <br />

                <div className="form-group">
                  <label className="form-label">
                    <h4>&nbsp; Fuel Type : </h4>
                  </label>
                  <input
                    type="text"
                    list="typef"
                    class="form-control"
                    placeholder="Select"
                    name="fuelType"
                    value={fuelType}
                    onChange={(e) => handleFuelType(e)}
                    required
                  />
                  <datalist id="typef">
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                  </datalist>
                </div>
                <br />
                <div className="form-group">
                  <label className="form-label">
                    <h4>&nbsp; Volume (L): </h4>
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    name="volume"
                    maxLength={3}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    required
                  />
                </div>
                <br />
<center>
                <br />
                <input
                  type="submit"
                  className="btn-lg btn-secondary"
                  value="Submit"
                  
                />
                </center>
                <br />
              </form>
            </div>
          </td>
        </tr>
      </table>
      </center>
    </div>
    </div>
  );
}

export default SubmitAppointment;
