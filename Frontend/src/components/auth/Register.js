import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterCustomer } from "../../Services/AuthServices";
import Swal from "sweetalert2";
import { ValidateSignUp } from "./Validation";
import reg from "../../img/reg.webp";
import reg1 from "../../img/reg.jpg";

const Register = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    address: "",
    mobileno: "+94",
    userRole: "Customer",
  });

  // State to manage validation result
  const [validationResult, setValidationResult] = useState({
    status: true,
    message: null,
  });

  // Destructuring form data
  const { name, email, password, password2, address, mobileno } = formData;

  // Function to handle form input changes
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    let validate = ValidateSignUp(formData);

    // Update the validation result state
    setValidationResult({
      status: validate.status,
      message: validate.message,
    });

    // Check if validation is successful
    if (validate.status) {
      if (password !== password2) {
        alert("Password do not match...", "danger");
      } else {
        let data = await RegisterCustomer(formData);
        console.log("data", data);
        if (data?.data?.userRole) {
          localStorage.setItem("token", data?.data?.token);
          localStorage.setItem("userRole", data?.data?.userRole);
          localStorage.setItem("user", data?.data?.user);
          Swal.fire({
            icon: "success",
            title: "Congrats!",
            text: "Registration successful...!",
          });
          navigate("/dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration Failed..!",
          });
        }
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${reg1})`,
        marginTop: "-100px",
        marginBottom: "-100px",
      }}
    >
      <br />
      <div className="register-form">
        <div style={{ height: "90px", backgroundColor: "#FA9c1B" }}>
          <h1 className="heading">User Registration Form</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Create Your Account
          </p>
        </div>
        <div style={{ height: "860px", backgroundColor: "white" }}>
          <table>
            <tr>
              <td>
                <div>
                  <form
                    style={{ backgroundColor: "#ebecf0", textAlign: "left" }}
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <br />
                    <div
                      className="Reg"
                      style={{
                        width: "600px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <label className="form-label">
                        <h4>Name of the User : </h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Please Enter Your Name - Xxxx Xxxx"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
      
                    </div>
                    <br />
                    <div
                      className="Reg"
                      style={{
                        width: "600px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <label className="form-label">
                        <h4>Email Address : </h4>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Please Enter A Valid Email Address - xxx@gmail.com"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <br />
                    <div
                      className="Reg"
                      style={{
                        width: "600px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <label className="form-label">
                        <h4>Create a Password : </h4>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Please Follow The Correct Guidelines"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                      <p> *There should be atleast one upper case letter and one special character</p>
                      <p>*There should be atleast 8 characters and 3 numbers should be included</p>
                      
                    </div>
                    <br />

                    <div
                      className="Reg"
                      style={{
                        width: "600px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <label className="form-label">
                        <h4>Confirm Password : </h4>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        value={password2}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <br />
                    <div
                      className="Reg"
                      style={{
                        width: "600px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <label className="form-label">
                        <h4>Contact Number : </h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Mobile no"
                        name="mobileno"
                        value={mobileno}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <br />
                    <div
                      className="Reg"
                      style={{
                        width: "600px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <label className="form-label">
                        <h4>Address : </h4>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={(e) => onChange(e)}
                      />
                      {/* Display error message if validation fails */}
                      {validationResult.status === false && (
                        <p className="error-message" style={{ color: "red" }}>
                          {validationResult.message}
                        </p>
                      )}
                    </div>
                    <br />
                    <center>
                      <input
                        type="submit"
                        className="btn-lg btn-secondary"
                        value="Register"
                        // Disable the button if validation fails
                        disabled={!validationResult.status}
                      />
                    </center>
                    <br />
                  </form>
                </div>
              </td>

              <td>
                <center>
                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;{" "}
                  <img
                    src={reg}
                    class="img-fluid"
                    alt=""
                    width="600"
                    height="2000"
                  />
                </center>
              </td>
            </tr>
          </table>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Register;
