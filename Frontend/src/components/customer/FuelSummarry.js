import React, { Component } from "react";
import axios from "axios";
import jsPdf from "jspdf";
import "jspdf-autotable";
import summarryimage from "../../img/FuelSummarry.jpg";

// Generate report - all Appointments
export default class UserList extends Component {
  constructor(props) {
    super(props);

    // this.deleteUser = this.deleteUser.bind(this);

    this.state = { appointments: [], posts: [] };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios
      .get("http://localhost:5000/GetAllAppointments/")
      .then((response) => {
        this.setState({ appointments: response.data.existingData });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //pdf generating
  jsPdfGenerator = () => {
    //new document in jspdf
    var doc = new jsPdf("p", "pt");

    doc.text(210, 30, "Details of Appointments");
    doc.autoTable({ html: "#my-pdf" });

    doc.autoTable({
      columnStyles: { europe: { halign: "center" } },
      margin: { top: 10 },
    });

    //save the pdf
    doc.save("Details of Appointments.pdf");
  };

  filterData(appointments,searchKey){
    const result = appointments.filter((appointments) =>
    appointments.vehicleNumber.toLowerCase().includes(searchKey)
  
    )
  
    this.setState({appointments:result})
  }
  
  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
  
    axios.get("http://localhost:5000/GetAllAppointments/").then(res=>{
      if(res.data.success){
        this.filterData(res.data.existingData,searchKey)
      }
    });
  }

  render() {
    return (
      <div
      style={{
        backgroundImage: `url(${summarryimage})`,
        backgroundSize: "cover",
      }}
      >
        <div className="container">
          <div style={{ float: "none" }}></div> <br />
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
             <center> <h1 style={{color:'white'}}> Details of all Appointments </h1> <br /> </center>
              <button
                type="button"
                title="Report generation"
                class="btn btn-outline-primary btn-sm"
                onClick={this.jsPdfGenerator}
              >
                {" "}
                <h4>Download as a PDF</h4>
              </button>
            </div>

            <div className="col-lg-3 mt-2 mb-2">
              <div
                class="form-control input-lg"
                style={{ backgroundColor: "#e5e3e3" }}
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>
            </div>
          </div>
          <form style={{ backgroundColor: "black" }}>
            <table class="table table-bordered table-white" id="my-pdf">
              <thead className="thead-light">
                <tr>
                  <th style={{color:'white'}} scope="col"> Vehicle Number </th>
                  <th style={{color:'white'}} scope="col"> Vehicle Type </th>
                  <th style={{color:'white'}} scope="col"> Date </th>
                  <th style={{color:'white'}} scope="col"> Fuel Type </th>
                  <th style={{color:'white'}} scope="col"> Volume (L)</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {this.state.appointments.map((props) => (
                  <tr key={props.id} style={{color:'#F7DE08'}}>
                    <td> {props.vehicleNumber} </td>
                    <td> {props.vehicleType} </td>
                    <td> {props.date} </td>
                    <td> {props.fuelType} </td>
                    <td> {props.volume} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
