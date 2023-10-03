//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

//import backgroud picture
import BgEmp9 from '../../img/BgEmp9.webp';

//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'

function EmpViewOneSalary() {

    //track the states in function and set values with useState 
const [DateForSalary,setDateForSalary]=useState("");
const [Emp_Name,setEmp_Name]=useState("");
const [Emp_ID,setEmp_ID]=useState("");
const [Bank_Account,setBank_Account]=useState("");
const [Bank_Name,setBank_Name]=useState("");
const [Bank_Branch,setBank_Branch]=useState("");
const [Emp_Position,setEmp_Position]=useState("");
const [Working_Days_For_Month,setWorking_Days_For_Month]=useState("");
const [Total_Days_For_Month,setTotal_Days_For_Month]=useState("");
const [Basic_Salary,setBasic_Salary]=useState("");
const [Conv_Allowance,setConv_Allowance]=useState("");
const [Performance_Allowance,setPerformance_Allowance]=useState("");
const [Total_Earning,setTotal_Earning]=useState("");

//id initialize to match the data
const id=useParams();


const [EmpLeaveOne]=useState({

    DateForSalary:"",
    Emp_Name:"",
    Emp_ID:"",
    Emp_Position:"",
    Bank_Account:"",
    Bank_Name:"",
    Bank_Branch:"",
    Working_Days_For_Month:"",
    Total_Days_For_Month:"",
    Basic_Salary:"",
    Performance_Allowance:"",
    Conv_Allowance:"",
    Total_Earning:""
})

//get one data for a matching ID
useEffect(function effectFunction() {
 console.log("get ID",id);

 axios.get(`http://localhost:5000/GetOneSalrySheet/${id?.id}`)
 .then(res=>{
   console.log("data",res);
   setDateForSalary(res.data.OneSalarySheet.DateForSalary)
   setEmp_Name(res.data.OneSalarySheet.Emp_Name)
   setEmp_ID(res.data.OneSalarySheet.Emp_ID)
   setEmp_Position(res.data.OneSalarySheet.Emp_Position)
   setBank_Account(res.data.OneSalarySheet.Bank_Account)
   setBank_Name(res.data.OneSalarySheet.Bank_Name)
   setBank_Branch(res.data.OneSalarySheet.Bank_Branch)
   setWorking_Days_For_Month(res.data.OneSalarySheet.Working_Days_For_Month)
   setTotal_Days_For_Month(res.data.OneSalarySheet.Total_Days_For_Month)
   setBasic_Salary(res.data.OneSalarySheet.Basic_Salary)
   setPerformance_Allowance(res.data.OneSalarySheet.Performance_Allowance)
   setConv_Allowance(res.data.OneSalarySheet.Conv_Allowance)
   setTotal_Earning(res.data.OneSalarySheet.Total_Earning)
  
 }).catch(err => console.log(err));



},[]);


//pdf generator function
jsPdfGenarator = ()=>{
    var doc = new jsPdf('p','pt');
  
    doc.text(210,30,"Your Salary Sheet")
    doc.autoTable({html:'#my-pdf'})
  
    doc.autoTable({
      columnStyles:{europe:{halign:'center'}},
      margin:{top:10},
    })
  
  
  doc.save("Monthly_Salary_Sheet.pdf");
  
  
  }


  return (
    <div>

<div style={{height:'80px', backgroundColor:"#FA9c1B", marginTop:'-20px'}}>
        <br/><br/>
        <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>YOUR SALARY SHEET</h1>
        <div style={{height:'80px', backgroundColor:"#ff8347", marginTop:'-50px'}}></div>

        </div>
<br/>

<div className='FORM2'style={{ marginTop: '40px', backgroundImage: `url(${BgEmp9})`,   backgroundSize: 'cover', padding:'10px 20% 10px 20%' }}>
<br/><br/>
                  <form >

                           

                        <table className='tableSalarySheet' style={{border:"1px solid black"}} id="my-pdf" >
                          

                          <tr>
                            <td>
                                <div className='form-group'>
                                <label style={{fontWeight:'700'}} >Available Date (From):</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 {DateForSalary}   
                                </div>
                            </td>
                          </tr>

                          <br/>

                          <tr>
                          <td>
                            <div className='form-group'>
                            <label style={{fontWeight:'700'}}>Employee Name: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {Emp_Name}                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Employee ID: </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Emp_ID} 
                                
                            </div>
                          </td>
                          </tr>
                          <br/>
                          <tr>
                          <td >
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Employee Positon: </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Emp_Position} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Bank Account: </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;
                                {Bank_Account}                                
                            </div>
                          </td>
                          </tr>
                          <br/>
                          
                          <tr>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Bank Branch:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Bank_Branch} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Bank Name:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {Bank_Name} 
                              
                            </div>
                          </td>
                          </tr>

                          <br/>
                          <tr>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Working Days For Month:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                {Working_Days_For_Month} 
                                
                            </div>
                          </td>
                          <td>
                            <div className='form-group'>
                                <label style={{fontWeight:'700'}}>Total Days For Month:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {Total_Days_For_Month} 
                              
                            </div>
                          </td>
                          </tr>


                          <tr>
                          <td colspan="4">
                            <div style={{width:"900px"}}>
                              <hr/>
                              </div>      
                          </td>
                          </tr>
                          
                            <tr>
                                <td>
                                   <label style={{fontWeight:'700'}}>Basic Salary (Rs.):</label>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {Basic_Salary} 
                                </td>                                
                            </tr>

                            <tr>
                                <td>
                                   <label style={{fontWeight:'700'}}>Conveyance Allowance (Rs.):</label>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {Conv_Allowance} 
                                </td>
                            </tr>
                           
                            <tr>
                                <td>
                                   <label style={{fontWeight:'700'}}>Performance Allowance (Rs.):</label>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {Performance_Allowance} 
                                </td>                               
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                   <label style={{fontWeight:'700'}}>Total Earning (Rs.):</label>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                    {Total_Earning} 
                                </td>            
                            </tr>

                          </table>
                          
                          <br/><br/>
                      
             
                  </form>
                  <br/>

                  <table>
                  <tr>
                    <td>
                    <button className="btn btn-success" style={{marginLeft:'30px',padding:'7px 7px',backgroundColor:'#3895d3',width:'220px'}}>
                    <a href="/EmpViewSalary"
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
  )
}

export default EmpViewOneSalary