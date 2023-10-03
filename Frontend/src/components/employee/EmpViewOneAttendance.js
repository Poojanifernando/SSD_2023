//import react
import React from 'react'
//import react hooks 
import {useState, useEffect } from 'react'
//import axios
import axios from 'axios'
//import useParams
import {useParams} from 'react-router-dom';


//import backgroud picture
import BgEmp7 from '../../img/BgEmp7.jpeg';

function ViewOneAttendance() {

     //track the states in function and set values with useState 
  const [Emp_Name, setEmp_Name]=useState("");
  const [Emp_ID, setEmp_ID]=useState("");
  const [Date, setDate]=useState("");
  const [Month, setMonth]=useState("");
  const [Shift, setShift]=useState("");
  const [Time_In, setTime_In]=useState("");
  const [Time_Out, setTime_Out]=useState("");
  // const [Total_Hours_per_Day,  setTotal_Hours_per_Day]=useState("");
  // const [Total_Hours_per_Month,setTotal_Hours_per_Month]=useState("");

  //id initialize to match the data
  const id=useParams();

  const [AttendanceOne]=useState({

          Emp_Name:"",
          Emp_ID:"",
          Date:"",
          Month:"",
          Shift:"",
          Time_In:"",
          Time_Out:"",
          // Total_Hours_per_Day:"",
          // Total_Hours_per_Month:""
  })


  //get one data by matching the id
  useEffect(function effectFunction() {
    console.log("get ID",id);
  
    axios.get(`http://localhost:5000/GetOneAttendance/${id?.id}`)
    .then(res=>{
      console.log("date",res);
      setEmp_Name(res.data.oneAttendance.Emp_Name)
      setEmp_ID(res.data.oneAttendance.Emp_ID)
      setDate(res.data.oneAttendance.Date)
      setMonth(res.data.oneAttendance.Month)
      setShift(res.data.oneAttendance.Shift)
      setTime_In(res.data.oneAttendance.Time_In)
      setTime_Out(res.data.oneAttendance.Time_Out)
      // setTotal_Hours_per_Day(res.data.oneAttendance.Total_Hours_per_Day)
      // setTotal_Hours_per_Month(res.data.oneAttendance.Total_Hours_per_Month)
   
    }).catch(err => console.log(err));
  
  
  
  },[]);


  return (
    <div>

            <div >
                <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                    <br/><br/>
                    <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>YOUR ATTENDANCE FOR {Date} </h1>
                    
                    <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
                </div>
                    
                    
                    <div style={{backgroundImage: `url(${BgEmp7})`,   backgroundSize: 'cover'}}>

                    
                      <p style={{ width:'50%', height:'50%', marginLeft:'515px',marginTop:'70px', fontWeight:'1000',color:"white",textShadow: '1px 2px 5px black', fontSize:'50px'}}>Check The Details</p>

                      
                      <button className="btn btn-success" style={{marginLeft:'50px', marginTop:'1px',padding:'10px 10px',backgroundColor:'#3895d3'}}>
                      <a href="/EmpViewAllAttendance"
                      style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                      <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>
                      



                    <table className='tableEmpAttOne' style={{ width:'35%', height:'40%', marginLeft:'480px',marginTop:'10px',fontSize:'20px',background:"rgba(80,80,80,0.65)"}}>
                     
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                   
                        <td > Attendance Date:</td> 
                        <td>{Date}</td>
                        
                    </tr> 
                    <br/>  
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                      
                        <td> Month:</td> 
                        <td>{Month}</td>

                    </tr> 
                    <br/>  
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                      
                        <td> Employee Name:</td> 
                        <td>{Emp_Name}</td>

                    </tr> 
                    <br/>  
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                        <td> Employee ID:</td> 
                        <td>{Emp_ID}</td>

                    </tr>  
                    <br/>       
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                        <td> Shift:</td> 
                        <td>{Shift}</td>

                    </tr>  
                    <br/>  
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                        <td> Time In:</td> 
                        <td>{Time_In}</td>

                    </tr> 
                    <br/>       
                    <tr style={{color:"white",textShadow: '1px 2px 5px black'}}>
                        <td> Time Out:</td> 
                        <td>{Time_Out}</td>
                        
                    </tr>   
                    
                       
                    <br/>
                       
                    </table>
                    <br/>
                    
                            
                            <br/>     
                    </div>
                    
                    
                    </div>
                    

    </div>
  )
}

export default ViewOneAttendance