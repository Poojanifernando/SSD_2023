//import react
import React from "react";
//import react hooks
import { useState, useEffect } from "react";
//import axios
import axios from "axios";
//import useParams (use to access the matching data)
import { useNavigate, useParams } from "react-router-dom";
//import { Container, Row, Col, Button, Form } from "react-bootstrap";
import appointmentimage from "../../img/Appointment.jpg";
function UpdateAppointment() {
  //track the states in function and set values with useState
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [fuelType, setFuleType] = useState("");
  const [volume, setVolume] = useState("");

  // const [Total_Hours_per_Day,  setTotal_Hours_per_Day]=useState("");
  // const [Total_Hours_per_Month,setTotal_Hours_per_Month]=useState("");

  //id initialize to match the data
  const id = useParams();

  const navigate = useNavigate();

  const [UpdateAppointment] = useState({
    vehicleNumber: "",
    vehicleType: "",
    Date: "",
    fuelType: "",
    volume: "",
  });

  //target.value use to get an input value from keyboard
  const handle_vehicleNumber_Change = (e) => {
    e.preventDefault();
    setvehicleNumber(e.target.value);

    //validation
    if (Number(e.target.value)) {
      alert("vehicleNumber Cannot Contain Numerical Value!");
    }
  };

  const handle_VehicleType = (e) => {
    e.preventDefault();
    setVehicleType(e.target.value);

    //validation
    if (e.target.value.length > 7) {
      alert("Limit Exceeded!");
    }
  };

  //assign the updated value to existing data
  const ChangeOnClick = async (e) => {
    e.preventDefault();

    console.log("data");

    const formData = new FormData();

    formData.append("vehicleNumber", vehicleNumber);
    formData.append("vehicleType", vehicleType);
    formData.append("date", date);
    formData.append("fuelType", fuelType);
    formData.append("volume", volume);

    setvehicleNumber("");
    setVehicleType("");
    setDate("");
    setFuleType("");
    setVolume("");

    console.log(formData.get("vehicleNumber"));

    UpdateAppointment.vehicleNumber = formData.get("vehicleNumber");
    UpdateAppointment.vehicleType = formData.get("vehicleType");
    UpdateAppointment.date = formData.get("date");
    UpdateAppointment.fuelType = formData.get("fuelType");
    UpdateAppointment.volume = formData.get("volume");

    console.log(UpdateAppointment);

    //update process
    console.log(id);
    await axios
      .put(
        `http://localhost:5000/UpdateAppointment/${id?.id}`,
        UpdateAppointment
      )
      .then((res) => {
        console.log("Return Data", res);
        alert("Update Success!!");
        navigate(
          "/ViewSubmittedAppointment/" + localStorage.getItem("Appointment_ID")
        );
      })
      .catch((err) => {
        alert("Update Failed!!");
        console.log(err);
      });
  };

  //page refresh function
  function refreshPage() {
    window.location.reload(false);
  }

  //get one data to update
  useEffect(function effectFunction() {
    console.log("get ID", id);

    axios
      .get(`http://localhost:5000/GetOneAppointment/${id?.id}`)
      .then((res) => {
        console.log("data", res);
        setvehicleNumber(res.data.oneAppointment.vehicleNumber);
        setVehicleType(res.data.oneAppointment.vehicleType);
        setDate(res.data.oneAppointment.date);
        setFuleType(res.data.oneAppointment.fuelType);
        setVolume(res.data.oneAppointment.volume);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${appointmentimage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="register-form">
        <div
          style={{
            height: "80px",
            backgroundColor: "#FA9c1B",
            marginTop: "-100px",
          }}
        >
          <h1 className="heading">Update Appointment</h1>
        </div>
        <center>
          <table>
            <br />

            <tr>
              <td>
                <div>
                  <form
                    style={{ backgroundColor: "#ebecf0" }}
                    onSubmit={(e) => submitButton(e)}
                  >
                    <div className="form-group">
                      <label className="form-label">
                        <h4>
                          &nbsp; Vehicle Number :
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h4>
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        class="form-control"
                        //placeholder="ABCXXXX"
                        name="vehicleNumber"
                        value={vehicleNumber}
                        onChange={(e) => setvehicleNumber(e.target.value)}
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
                        onChange={(e) => setVehicleType(e.target.value)}
                        required
                      />
                      <datalist id="type">
                        <option value="Car">Car</option>
                        <option value="Van">Van</option>
                        <option value="SUV">SUV</option>
                        <option value="Lorry">Lorry</option>
                        <option value="Bus">Bus</option>
                        <option value="Bike">Bike</option>
                        <option value="Three Wheel">Three Wheel</option>
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
                        onChange={(e) => setFuleType(e.target.value)}
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
                        maxLength="3"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        required
                      />
                    </div>
                    <br />
                    <br />
                    <center>
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={(e) => ChangeOnClick(e)}
                      >
                        Update{" "}
                      </button>
                    </center>
                    &nbsp;&nbsp;&nbsp;&nbsp;
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

export default UpdateAppointment;
