import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//import the image
import Attendance from '../../img/Attendance.png'

//import backgroud picture
import BgEmp3 from '../../img/BgEmp3.jpeg';



const EmpAttendaceMark = () => {

    //to navigate to anohter page or the same page
    const navigate=useNavigate();

    //use state to track state in function components
    const [Emp_Name, setEmp_Name]=useState("");
    const [Emp_ID, setEmp_ID]=useState("");
    const [Date, setDate]=useState("");
    const [Shift, setShift]=useState("");
    const [Time_In, setTime_In]=useState("");
    const [Time_Out, setTime_Out]=useState("");
    const [Month, setMonth]=useState("");
    // const [Total_Hours_per_Day,  setTotal_Hours_per_Day]=useState("");
    // const [Total_Hours_per_Month,setTotal_Hours_per_Month]=useState("");


    //handle the input data 

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
 // Event handler for Emp_ID input
    const handle_Emp_ID_Change=(e)=>{
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
  }

    const handle_Date_Change=(e)=>{
      e.preventDefault();
      setDate(e.target.value)
    }
   
    const handle_Month_Change=(e)=>{
      e.preventDefault();
      setMonth(e.target.value)
    }

    const handle_Shift_Change=(e)=>{
      e.preventDefault();
      setShift(e.target.value)
    }

    const handle_Time_In_Change=(e)=>{
      e.preventDefault();
      setTime_In(e.target.value)
    }

    const handle_Time_Out_Change=(e)=>{
      e.preventDefault();
      setTime_Out(e.target.value)
    }

    // const handle_Total_Hours_per_Day_Change=(e)=>{
    //   e.preventDefault();
    //   setTotal_Hours_per_Day(e.target.value)
    // }

    // const handle_Total_Hours_per_Month_Change=(e)=>{
    //   e.preventDefault();
    //   setTotal_Hours_per_Month(e.target.value)
    // }


    // clear all input values
      const resetInputField = () => {
        setEmp_Name("");
        setEmp_ID("");
        setDate("");
        setMonth("");
        setShift("");
        setTime_In("");
        setTime_Out("");
        // setTotal_Hours_per_Day("");
        // setTotal_Hours_per_Month("");
      };


     
      

      //handle the submit data
    const handleSubmit = async (e)=>{
      e.preventDefault();

      if(Emp_Name===''|| Emp_ID===''||Date===''|| Shift===''|| Time_In===''||Time_Out===''||Month===''){
        alert("Fill All The Details!!")

      }else {

        let newAttendace={
          Emp_Name:Emp_Name,
          Emp_ID:Emp_ID,
          Date:Date,
          Month:Month,
          Shift:Shift,
          Time_In:Time_In,
          Time_Out:Time_Out,
          // Total_Hours_per_Day:Total_Hours_per_Day,
          // Total_Hours_per_Month:Total_Hours_per_Month
        }

        console.log("Sending Attendance Details...",newAttendace);

        let data= await axios.post('http://localhost:5000/EmpAttendace/Save',{
          Emp_Name:Emp_Name,
          Emp_ID:Emp_ID,
          Date:Date,
          Month:Month,
          Shift:Shift,
          Time_In:Time_In,
          Time_Out:Time_Out,
          // Total_Hours_per_Day:Total_Hours_per_Day,
          // Total_Hours_per_Month:Total_Hours_per_Month
        });

        

        console.log("Saved Data : ",data);

        if(data.status !== 200){
          alert("Data Didnt Store")
        }
        else{
      
          alert("You Are Saving The Data")
          navigate('/EmpViewAllAttendance')
        }

      }

  
    }


  return (
    <div>


            <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>MARK YOUR ATTENDANCE</h1>
                <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
            </div>


            <div style={{backgroundImage: `url(${BgEmp3})`,   backgroundSize: 'cover', marginTop:'70px'}}>
              <br/>
              
              <button className="btn btn-success" style={{marginLeft:'70px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
              <a href="/EmpViewAllAttendance"
              style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
              <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>

            <div style={{width:'800px', marginLeft:'350px',background:"rgba(25,222,225,0.35)"}}>

            <img src={Attendance} style={{ width: "600px", marginLeft:'90px'}}></img>

              <br/>
                <center><h2 style={{color:"white",textShadow: '1px 2px 5px black'}}>FILL THE DETAILS</h2></center>
              <br/> 
              
               <form onSubmit={(e) => handleSubmit(e)} >
                <table className='table'  style={{color:"white",textShadow: '1px 2px 5px black'}} >

                  <tr>
                  <td>
                  <div className='form-group'>
                            <label>Month :</label><br />
                              <select
                              id="Month" 
                              className="form-control"
                              name="Month"
                              placeholder="Select The Month"
                              value={Month}
                              onChange={(e) => handle_Month_Change(e)} required='true'>
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
                    </td>
                  </tr>


                  <tr>
                    <td>
                    <div className='form-group' >
                     <label>Employee Name :</label><br />
                        <input 
                        type='text' 
                        value={Emp_Name} 
                        placeholder="Enter Your Name With Initials"
                        className='form-control' 
                        style={{ marginBottom: '20px' }} 
                        onChange={(e) => handle_Emp_Name_Change(e)} 
                        required='true' />
                        
                    </div>
                    </td>
                      <td>
                        <div className='form-group'>
                            <label>Employee ID :</label><br />
                              <input 
                              type='text' 
                              value={Emp_ID} 
                              placeholder="Enter Your Emp ID"
                              className='form-control' 
                              style={{ marginBottom: '20px' }} 
                              onChange={(e) => handle_Emp_ID_Change(e)} 
                              required='true' />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> 
                        <br/>   
                        <div className='form-group'>
                            <label>Date :</label><br />
                              <input 
                              type='date' 
                              value={Date} 
                              className='form-control' 
                              style={{ marginBottom: '20px' }} 
                              onChange={(e) => handle_Date_Change(e)} 
                              required='true' />
                        </div>
                      </td>
                      <td>
                        <div className='form-group'>
                            <label>Shift :</label><br />
                              <select
                              id="Shift" 
                              className="form-control"
                              name="Shift"
                              placeholder="Select Your Shift"
                              value={Shift}
                              onChange={(e) => handle_Shift_Change(e)} required='true'>
                                      <option value=" ">Choose</option>
                                      <option value="Day">Day</option>
                                      <option value="Night">Night</option>
                                      <option value="Part Time">Part Time</option>
                                          
                              </select>
                        </div>
                      </td>
                    </tr>
                    <br/> 
                    <tr>
                      <td>
                      <div className='form-group'>
                        <label>Time In :</label><br />
                          <input 
                          type='time' 
                          value={Time_In} 
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          onChange={(e) => handle_Time_In_Change(e)} 
                          required='true' />
                      </div>
                    </td>
                    <td>
                    <div className='form-group'>
                        <label>Time Out:</label><br />
                          <input 
                          type='time' 
                          value={Time_Out} 
                          className='form-control' 
                          style={{ marginBottom: '20px' }} 
                          onChange={(e) => handle_Time_Out_Change(e)} 
                          required='true' />
                    </div>
                    </td>
                    </tr>

                  </table>
                  <div>
                      
                    <table>
                      <tr>
                        <td>
                        <button type='submit' className='btn btn-success' style={{marginLeft:" 270px"}} > 
                        <i class="fa-solid fa-circle-check"></i>
                        &nbsp; SUBMIT</button>
                        </td>
                        
                        <td>
                        <button className="btn btn-warning" onClick={resetInputField} style={{marginLeft:" 50px"}}> 
                        <i class="fa-solid fa-broom"></i>
                        &nbsp; CLEAR</button>
                        </td>
                      </tr>
                      </table>
                     
                    </div>
                </form>
                <br/>
            </div>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>

    </div>
  )
}

export default EmpAttendaceMark