//import react
import React from 'react'
//import react hooks 
import {useState, useEffect } from 'react'
//import axios
import axios from 'axios'
//import useParams
import {useParams} from 'react-router-dom';
//import backgroud picture
import BgEmp1 from '../../img/BgEmp1.jpeg';

//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'



function EmpLeaveViewOne() {

 //track the states in function and set values with useState 
 const [Today, setToday]=useState("");
 const [Emp_Name, setEmp_Name]=useState("");
 const [Emp_ID, setEmp_ID]=useState("");
 const [Leave_Reason, setLeave_Reason]=useState("");
 const [Leave_Reason_Other, setLeave_Reason_Other]=useState("");
 const [Leave_From, setLeave_From]=useState("");
 const [Leave_To, setLeave_To]=useState("");
 const [Approval, setApproval]=useState("");
 const [Comments, setComments]=useState("");

//id initialize to match the data
const id=useParams();


const [EmpLeaveOne]=useState({

      Today:"",
      Emp_Name:"",
      Emp_ID:"",
      Leave_Reason:"",
      Leave_Reason_Other:"",
      Leave_From:"",
      Leave_To:"",
      Approval:"",
      Comments:""
})

//get one data for a matching ID
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:5000/GetOneLeaveRequest/${id?.id}`)
  .then(res=>{
    console.log("data",res);
    setToday(res.data.OneLeaveReq.Today)
    setEmp_Name(res.data.OneLeaveReq.Emp_Name)
    setEmp_ID(res.data.OneLeaveReq.Emp_ID)
    setLeave_Reason(res.data.OneLeaveReq.Leave_Reason)
    setLeave_Reason_Other(res.data.OneLeaveReq.Leave_Reason_Other)
    setLeave_From(res.data.OneLeaveReq.Leave_From)
    setLeave_To(res.data.OneLeaveReq.Leave_To)
    setApproval(res.data.OneLeaveReq.Approval)
    setComments(res.data.OneLeaveReq.Comments)
   
  }).catch(err => console.log(err));



},[]);


//pdf generator function
jsPdfGenarator = ()=>{
  var doc = new jsPdf('p','pt');

  doc.text(210,30,"Your Leave Form")
  doc.autoTable({html:'#my-pdf'})

  doc.autoTable({
    columnStyles:{europe:{halign:'center'}},
    margin:{top:10},
  })


doc.save("LeaveForm.pdf");


}


  return (
    <div>


<div >
                <div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
                <br/><br/>
                <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>YOUR LEAVE FORM</h1>
                <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>
                
                <br/>
                
                

            </div>

            <br/>

                <div className='FORM2'style={{ marginTop: '40px', backgroundColor: "#d9d9d9", padding:'10px 20% 10px 20%',
                backgroundImage: `url(${BgEmp1})`,   backgroundSize: 'cover' }}>
                  <form style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}} >

                           

                        <table className='tableLeaveOne' style={{background:"rgba(80,80,80,0.45)"}} id="my-pdf">
                          <br/>
                          <tr>
                          <div className='form-group'>
                              <label >Submitted Date:</label> 
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                              &nbsp;
                              {Today}   
                            </div>
                           
                          </tr>
                          <br/>
                          <tr>
                          
                          <td>
                            <div className='form-group'>
                            <label>Employee Name: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {Emp_Name} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label >Employee ID: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Emp_ID} 
                                
                            </div>
                          </td>
                          </tr>
                          <br/>
                          <tr>
                          <td colspan="2">
                            <div className='form-group'>
                                <label >Reason For The Leave: </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Leave_Reason} 
                                
                            </div>
                          </td>
                          </tr>
                          <br/>
                          <tr>
                          <td colspan="2">
                            <div className='form-group'>
                                <label >Reason For "Other": </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;
                                {Leave_Reason_Other} 
                                
                                
                            </div>
                          </td>
                          </tr>
                          <br/>
                          <tr>
                          <td>
                            <div className='form-group'>
                                <label >Leave From:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Leave_From} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label >Leave To:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Leave_To} 
                              
                            </div>
                          </td>
                          </tr>


                          <tr>
                          <td colspan="2">
                            <div>
                              <p>------------------------------------------------------------------------------------------</p>
                              <p style={{marginLeft:'750px'}}>*Managers Only</p>
                            </div>
                          </td>
                          </tr>
                          
                          <tr>
                            <td>
                              <div className='form-group'>
                                  <label >Approval:</label>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {Approval}
                                  
                              </div>
                          </td>
                          </tr>
                          <br/>
                          <tr>
                            <td colspan="2">
                              <div className='form-group'>
                                  <label >Comments:</label>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                  {Comments}
                              </div>
                            </td>
                          </tr>
                          <br/><br/>
                        </table> 

                        
                        
                  </form>
                  <br/>
                <table>
                  <tr>
                  
                    <td>
                    <button className="btn btn-success" style={{marginLeft:'60px',padding:'7px 7px',backgroundColor:'#3895d3',width:'220px'}}>
                    <a href="/EmpViewAllLeaves"
                    style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                    </button>
                    </td>
                    <td>
                    <button className="btn btn-success" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                    marginLeft:'380px', width:'220px'}} >
                    <i class="fa-sharp fa-solid fa-file-arrow-down"></i> Download 
                    </button> 
                    </td>
                  </tr>
                </table>
                <br/><br/><br/><br/><br/><br/>
              </div>

                           

          </div>

                   
                   

    </div>
  )
}

export default EmpLeaveViewOne