//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

//import the image
import AttEdits from '../../img/AttEdits.png'

//import backgroud picture
import BgEmp4 from '../../img/BgEmp4.jpeg';

function AttendanceUpdate() {

  //track the states in function and set values with useState 
  const [Emp_Name, setEmp_Name]=useState("");
  const [Emp_ID, setEmp_ID]=useState("");
  const [Date, setDate]=useState("");
  const [Shift, setShift]=useState("");
  const [Time_In, setTime_In]=useState("");
  const [Time_Out, setTime_Out]=useState("");
  const [Month, setMonth]=useState("");
  

  //id initialize to match the data
  const id=useParams();

  const [AttendanceUpdate]=useState({

          Emp_Name:"",
          Emp_ID:"",
          Date:"",
          Month:"",
          Shift:"",
          Time_In:"",
          Time_Out:"",
         
  })


  // Validation function to check for special characters
  const isValidInput = (inputValue) => {
    const specialCharRegex = /[^a-zA-Z0-9]/;
    return !specialCharRegex.test(inputValue);
  }


  //target.value use to get an input value from keyboard
  const handle_Emp_Name_Change = (e)=>{
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
  } 

  
  const handle_Emp_ID_Change=(e)=>{
    e.preventDefault();
    const inputValue = e.target.value;

    // Validation
    if (!isValidInput(inputValue)) {
      alert("ID Cannot Contain Special Characters!");
      return;
    }

  // Additional validation for length
  if ((e.target.value).length>7) {
    alert("Limit Exceeded!");
    return;
  }
  setEmp_ID(inputValue);
  }

//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
  e.preventDefault();

  console.log("data");

  const formData = new FormData();

  formData.append("Emp_Name",Emp_Name);
  formData.append("Emp_ID",Emp_ID);
  formData.append("Date",Date);
  formData.append("Month",Month);
  formData.append("Shift",Shift);
  formData.append("Time_In",Time_In);
  formData.append("Time_Out",Time_Out);
 


        setEmp_Name("");
        setEmp_ID("");
        setDate("");
        setMonth("");
        setShift("");
        setTime_In("");
        setTime_Out("");
        

console.log(formData.get('Emp_Name'));

AttendanceUpdate.Emp_Name=formData.get('Emp_Name');
AttendanceUpdate.Emp_ID=formData.get('Emp_ID');
AttendanceUpdate.Date=formData.get('Date');
AttendanceUpdate.Month=formData.get('Month');
AttendanceUpdate.Shift=formData.get('Shift');
AttendanceUpdate.Time_In=formData.get('Time_In');
AttendanceUpdate.Time_Out=formData.get('Time_Out');


console.log(AttendanceUpdate);


//update process 
console.log(id)
await axios.put(`http://localhost:5000/UpdateAttendance/${id?.id}`,AttendanceUpdate)
.then(res=>{
  console.log("Return Data",res);
  alert("Update Success!!");

})
.catch(err=>{
  alert("Update Failed!!");
  console.log(err);
});

}

//page refresh function
function refreshPage() {
  window.location.reload(false);
}




//get one data to update
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:5000/GetOneAttendance/${id?.id}`)
  .then(res=>{
    console.log("data",res);
    setEmp_Name(res.data.oneAttendance.Emp_Name)
    setEmp_ID(res.data.oneAttendance.Emp_ID)
    setDate(res.data.oneAttendance.Date)
    setMonth(res.data.oneAttendance.Month)
    setShift(res.data.oneAttendance.Shift)
    setTime_In(res.data.oneAttendance.Time_In)
    setTime_Out(res.data.oneAttendance.Time_Out)
   
 
  }).catch(err => console.log(err));



},[]);



  return (
          <div>


            <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>MARK YOUR ATTENDANCE</h1>
                <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
            </div>

              

            <div style={{ backgroundImage: `url(${BgEmp4})`,   backgroundSize: 'cover', marginTop:'70px'}}>

              <br/>

              <button className="btn btn-success" style={{marginLeft:'100px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/EmpViewAllAttendance"
              style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

              <table>
                <tr>
                  <td> <img src={AttEdits} style={{ width: "400px", marginLeft:'90px'}}></img></td>
                          
                  <td>
                          <form style={{width:'60%', marginLeft:'450px',fontSize:'18px', color:"white",textShadow: '1px 2px 5px black',background:"rgba(178,34,34,0.35)"}}>
                          <div className='form-group'>
                                        <h5>Month: </h5>
                                          <select
                                          id="Month" 
                                          className="form-control"
                                          name="Month"
                                          placeholder="Select The Month"
                                          value={Month}
                                          onChange={e => setMonth(e.target.value)}  required='true'>
                                                  <option value=" ">Choose</option>
                                                  <option value="January">January</option>
                                                  <option value="February">February</option>
                                                  <option value="March">March</option>
                                                  <option value="April">April</option>
                                                  <option value="May">May</option>
                                                  <option value="June">June</option>
                                                  <option value="July">July</option>
                                                  <option value="August">August</option>
                                                  <option value="September">September</option>
                                                  <option value="October">October</option>
                                                  <option value="November">November</option>
                                                  <option value="December">December</option>
                                                      
                                          </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <h5>Employee Name: </h5>
                                        <input type="text"
                                        className="form-control"
                                        name="Emp_Name"
                                        onChange={(e) => handle_Emp_Name_Change(e)} 
                                        value={Emp_Name}
                                        required='true'
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <h5>Employee ID: </h5>
                                        <input type="text"
                                        className="form-control"
                                        name="Emp_ID"
                                        onChange={(e) => handle_Emp_ID_Change(e)}
                                        value={Emp_ID}
                                        required='true'
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <h5>Date: </h5>
                                        <input type="date"
                                        className="form-control"
                                        name="Date"
                                        onChange={e => setDate(e.target.value)}
                                        value={Date}
                                        required='true'
                                        />
                                    </div>
                                    <br/>
                                    <div className='form-group'>
                                        <h5>Shift: </h5>
                                          <select
                                          id="Shift" 
                                          className="form-control"
                                          name="Shift"
                                          placeholder="Select Your Shift"
                                          value={Shift}
                                          onChange={e => setShift(e.target.value)}  required='true'>
                                                  <option value=" ">Choose</option>
                                                  <option value="Day">Day</option>
                                                  <option value="Night">Night</option>
                                                  <option value="Part Time">Part Time</option>
                                                      
                                          </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <h5>Time In: </h5>
                                        <input type="time"
                                        className="form-control"
                                        name="Time_In"
                                        onChange={e => setTime_In(e.target.value)}
                                        value={Time_In}
                                        required='true'
                                        />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <h5>Time Out: </h5>
                                        <input type="time"
                                        className="form-control"
                                        name="Time_Out"
                                        onChange={e => setTime_Out(e.target.value)}
                                        value={Time_Out}
                                        required='true'
                                        />
                                    </div>
                                    <br/>
                                  
                            </form>
                 </td>
                </tr>
              </table> 
                  
                      
              <button className="btn btn-secondary" type="submit" style={{ width:"150px", 
                      marginLeft:"990px", backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                      <i class="fa-solid fa-pen-to-square"></i>
                      &nbsp; UPDATE
              </button>
              
             
              <button className="btn btn-warning" style={{width:"150px",marginLeft:"10px"}}
              onClick={refreshPage}>  
              <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp;Refresh
              </button>
              
              
                           
              <br/> <br/><br/>
          </div>
                
       </div>
  )
}

export default AttendanceUpdate