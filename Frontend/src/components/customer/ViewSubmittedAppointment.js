import * as React from "react";
//import React, { Component } from "react";
//import "../node_modules/bootstrap/scss/bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
//import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import viewappointment from "../../img/viewappointment.jpg";

function ViewSubmitAppointment() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  const navigate = useNavigate();

  //id initialize to match the data
  const id = useParams();

  //const [appointment, setAppointment] = useState([]);

  const [AppointmentOnce] = useState({
    vehicleNumber: "",
    vehicleType: "",
    date: "",
    fuelType: "",
    volume: "",
  });

  function deleteButton() {
    axios
      .delete(`http://localhost:5000/DeleteAppointment/${id?.id}`)

      .then((res) => {
        alert("Appointment Deleted");
        navigate("/SubmitAppointment/");

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   React.useEffect(() => {
  useEffect(function getAppointment() {
    console.log("get ID,id");
    axios
      .get(
        `http://localhost:5000/GetOneAppointment/${localStorage.getItem(
          "Appointment_ID"
        )}`
      )
      .then((res) => {
        console.log("date", res);
        // setAppointment(res.data.customer);
        setVehicleNumber(res.data.oneAppointment.vehicleNumber);
        setVehicleType(res.data.oneAppointment.vehicleType);
        setDate(res.data.oneAppointment.date);
        setFuleType(res.data.oneAppointment.fuelType);
        setVolume(res.data.oneAppointment.volume);

        console.log(res);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
    // getAppointment();
  }, []);

  /* useEffect(() => {
    console.log("get ID,id");
    axios
      .get(
        `http://localhost:5000/GetOneAppointment/${localStorage.getItem(
          "Appointment_ID"
        )}`
      )
      .then((res) => {
        console.log("date", res);
        // setAppointment(res.data.customer);
        setVehicleNumber(res.data.oneAppointment.vehicleNumber);
        setVehicleType(res.data.oneAppointment.vehicleType);
        setDate(res.data.oneAppointment.date);
        setFuleType(res.data.oneAppointment.fuelType);
        setVolume(res.data.oneAppointment.volume);

        console.log(res);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    

    <div style={{ backgroundImage: `url(${viewappointment})`, backgroundSize: '100%', padding:'10px 20% 10px 20%'}}>
      <center>

      <div
        style={{
          height: "80px",
          backgroundColor: "#eaeddd",
          marginTop: "0px",
         
        }}
      >
        <h1 className="heading" style={{color:'black'}}>Your Appointment</h1>
      </div>

      </center>
    <center>
      <table>
        <br />

        <tr>
          <td>
            <center></center>
            <div>
              <form
                style={{ backgroundColor: "#ebecf0", opacity:"0.9" }}
                onSubmit={(e) => submitButton(e)}
              >
                <div className="form-group" style={{padding:'30px 10px 0px 70px'}}>
                 
                  <label className="form-label">
                    <h4>Vehicle Number &nbsp;:&nbsp; {vehicleNumber}</h4>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <br />
                <div className="form-group">
                &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="form-label">
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vehicle Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {vehicleType}</h4>
                  </label>
                </div>
                <br />
                <div className="form-group">
                &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="form-label">
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {date}</h4>
                  </label>
                </div>
                <br />

                <div className="form-group">
                &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="form-label">
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fuel Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {fuelType}</h4>
                  </label>
                </div>
                <br />
                <div className="form-group">
                &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="form-label">
                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Volume (L) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; {volume}</h4>
                  </label>
                </div>
                <br />

                <br />
<center>

<Link to={"/UpdateAppointment/" + id.id}>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    href={"/UpdateAppointment/${id?.id}"}
                  >
                    Edit 
                  </button>
                </Link>
                &nbsp;&nbsp;
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={deleteButton}
                >
                  Delete
                </button>
                <br></br>
                <br></br>
                <Link to={"/FuelSummarry/"}>
                  <button type="button" class="btn btn-success">
                    Fuel Summary
                  </button>
                </Link>
                <br />
                <br></br>

</center>
                
              </form>
            </div>
          </td>
        </tr>
      </table>
      </center>
    </div>
  );
}

export default ViewSubmitAppointment;
