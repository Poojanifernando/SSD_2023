//import react
import React from "react";
// import useState and useEffect hooks
import { useState, useEffecr } from "react";
//import axios
import axios from "axios";
//import useNavigation to navigate to another page
import { useNavigate } from "react-router-dom";

//import backgroud picture
import BgEmp6 from "../../img/BgEmp6.jpeg";

function LeaveFormCreate() {
  //to navigate to anohter page or the same page
  const navigate = useNavigate();

  //use state to track state in function components
  const [Today, setToday] = useState("");
  const [Emp_Name, setEmp_Name] = useState("");
  const [Emp_ID, setEmp_ID] = useState("");
  const [Leave_Reason, setLeave_Reason] = useState("");
  const [Leave_Reason_Other, setLeave_Reason_Other] = useState("");
  const [Leave_From, setLeave_From] = useState("");
  const [Leave_To, setLeave_To] = useState("");

  //handle the input data

  //target.value use to get an input value from keyboard
  const handle_Today_Change = (e) => {
    e.preventDefault();
    setToday(e.target.value);
  };

  // Validation function to check for special characters
  const isValidInput = (inputValue) => {
    const specialCharRegex = /[^a-zA-Z0-9]/;
    return !specialCharRegex.test(inputValue);
  };

  const handle_Emp_Name_Change = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    //validation
    if (Number(e.target.value)) {
      alert("Name Cannot Contain Numerical Value!");
      return;
    }
    if (!isValidInput(inputValue)) {
      alert("Name Cannot Contain Special Characters!");
      return;
    }
    setEmp_Name(inputValue);
  };

  // Event handler for Emp_ID input
  const handle_Emp_ID_Change = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    // Validation
    if (!isValidInput(inputValue)) {
      alert("ID Cannot Contain Special Characters!");
      return;
    }

    // Additional validation for length
    if (inputValue.length > 7) {
      alert("Limit Exceeded!");
      return;
    }

    setEmp_ID(inputValue);
  };

  const handle_Leave_Reason_Change = (e) => {
    e.preventDefault();
    setLeave_Reason(e.target.value);
  };

  // Event handler for Leave_Reason_Other input
  const handle_Leave_Reason_OtherChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    // Validation
    if (!isValidInput(inputValue)) {
      alert("Reason Other Cannot Contain Special Characters!");
      return;
    }

    setLeave_Reason_Other(inputValue);
  };

  const handle_Leave_From_Change = (e) => {
    e.preventDefault();
    setLeave_From(e.target.value);
  };

  const handle_Leave_To_Change = (e) => {
    e.preventDefault();
    setLeave_To(e.target.value);
  };

  // clear all input values
  const resetInputField = () => {
    setToday("");
    setEmp_Name("");
    setEmp_ID("");
    setLeave_Reason("");
    setLeave_Reason_Other("");
    setLeave_From("");
    setLeave_To("");
  };

  //handle the submit data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      Today === "" ||
      Emp_Name === "" ||
      Emp_ID === "" ||
      Leave_Reason === "" ||
      Leave_From === "" ||
      Leave_To === ""
    ) {
      alert("Fill All The Details!!");
    } else {
      let newLeaveReq = {
        Today: Today,
        Emp_Name: Emp_Name,
        Emp_ID: Emp_ID,
        Leave_Reason: Leave_Reason,
        Leave_Reason_Other: Leave_Reason_Other,
        Leave_From: Leave_From,
        Leave_To: Leave_To,
      };

      console.log("Sending Leave Requesting  Details...", newLeaveReq);

      let data = await axios.post("http://localhost:5000/EmpLeaveReq/Save", {
        Today: Today,
        Emp_Name: Emp_Name,
        Emp_ID: Emp_ID,
        Leave_Reason: Leave_Reason,
        Leave_Reason_Other: Leave_Reason_Other,
        Leave_From: Leave_From,
        Leave_To: Leave_To,
      });

      console.log("Saved Data : ", data);

      if (data.status !== 200) {
        alert("Data Didnt Store");
      } else {
        alert("You Are Saving The Data");
        navigate("/EmpViewAllLeaves");
      }
    }
  };

  return (
    <div>
      <div
        style={{
          height: "80px",
          backgroundColor: "#FA9c1B",
          marginTop: "-20px",
        }}
      >
        <br />
        <br />
        <h1 style={{ color: "black", textAlign: "center", fontSize: "60px" }}>
          SUBMIT LEAVE FORM
        </h1>
        <div
          style={{
            height: "80px",
            backgroundColor: "#ff8347",
            marginTop: "-50px",
          }}
        ></div>

        <button
          className="btn btn-success"
          style={{
            padding: "9px 9px",
            backgroundColor: "#3895d3",
            marginLeft: "10px",
          }}
        >
          <a
            href="/EmpViewAllLeaves"
            style={{
              textDecoration: "none",
              backgroundColor: "#3895d3",
              color: "white",
              fontSize: "17px",
            }}
          >
            <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back
          </a>
        </button>
      </div>

      <br />

      <div
        className="FORM2"
        style={{
          marginTop: "40px",
          backgroundImage: `url(${BgEmp6})`,
          backgroundSize: "cover",
          padding: "10px 20% 10px 20%",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            className="form-group"
            style={{
              fontSize: "18px",
              color: "white",
              textShadow: "1px 2px 5px black",
            }}
          >
            <label>Today</label>
            <br />
            <input
              type="date"
              value={Today}
              className="form-control"
              style={{ marginBottom: "20px", width: "300px" }}
              onChange={(e) => handle_Today_Change(e)}
              required="true"
            />
          </div>

          <table
            className="tableLeave"
            style={{
              fontSize: "18px",
              color: "white",
              textShadow: "1px 2px 5px black",
              background: "rgba(180,80,80,0.45)",
            }}
          >
            <br />

            <tr>
              <td>
                <div className="form-group">
                  <label>Employee Name :</label>
                  <br />
                  <input
                    type="text"
                    value={Emp_Name}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => handle_Emp_Name_Change(e)}
                    required="true"
                  />
                </div>
              </td>

              <td>
                <div className="form-group">
                  <label>Employee ID: </label>
                  <br />
                  <input
                    type="text"
                    value={Emp_ID}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => handle_Emp_ID_Change(e)}
                    required="true"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <div className="form-group">
                  <label>Reason For The Leave: </label>
                  <br />
                  <select
                    type="text"
                    id="reason"
                    value={Leave_Reason}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => handle_Leave_Reason_Change(e)}
                    required="true"
                  >
                    <option value=" ">Choose</option>
                    <option value="Medical Leave">Medical Leave</option>
                    <option value="Clinic Day">Clinic Day</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <div className="form-group">
                  <label>If Its "Other", Type The Reason Here: </label>
                  <br />
                  <input
                    type="text"
                    value={Leave_Reason_Other}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => handle_Leave_Reason_OtherChange(e)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label>Leave From:</label>
                  <br />
                  <input
                    type="date"
                    value={Leave_From}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => handle_Leave_From_Change(e)}
                    required="true"
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label>Leave To:</label>
                  <br />
                  <input
                    type="date"
                    value={Leave_To}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => handle_Leave_To_Change(e)}
                    required="true"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <div>
                  <p>
                    ------------------------------------------------------------------------------------------
                  </p>
                  <p style={{ marginLeft: "750px" }}>*Manager Only</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label>Approval:</label>
                  <br />
                  <select
                    type="text"
                    id="approval"
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                  >
                    <option value=" ">Don't Type Anything Here...</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <div className="form-group">
                  <label>Comments:</label>
                  <br />
                  <textarea
                    class="form-control"
                    id="Comments"
                    rows="3"
                    placeholder="Dont Type Anything Here..."
                  ></textarea>
                </div>
              </td>
            </tr>
            <br />
            <br />
          </table>

          <table>
            <tr>
              <td>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ marginLeft: " 330px" }}
                >
                  <i class="fa-solid fa-circle-check"></i>
                  &nbsp; SUBMIT
                </button>
              </td>

              <td>
                <button
                  className="btn btn-warning"
                  onClick={resetInputField}
                  style={{ marginLeft: " 50px" }}
                >
                  <i class="fa-solid fa-broom"></i>
                  &nbsp; CLEAR
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default LeaveFormCreate;
