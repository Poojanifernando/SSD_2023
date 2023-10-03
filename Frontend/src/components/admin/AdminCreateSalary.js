//import react
import React from 'react'

//import axios
import axios from 'axios'

//import useSate and useEffect from react 
import {useEffect,useState} from 'react'

//import useNavigate from reat-router-dom
import { useNavigate } from 'react-router-dom'

//import backgroud picture
import BgAdmin1 from '../../img/BgAdmin1.jpeg';


function AdminCreateSalary() {

//declare a variable to navigation
const navigate=useNavigate();

//useState to track the the states(data and properties) in the functional compenent
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



//calculate total salary
let num1 = Basic_Salary;
let num2 = Conv_Allowance;
let num3= Working_Days_For_Month*100; //performance allowance 
let tot= parseInt(num1)+parseInt(num2)+parseInt(num3);

//handle the input data

const handle_DateForSalary = (e)=>{
    e.preventDefault();
    setDateForSalary(e.target.value);
    
  } 

const handle_Emp_Name = (e)=>{
    e.preventDefault();
    setEmp_Name(e.target.value);

    //validation
    if (Number(e.target.value)) {
      alert("Name Cannot Contain Numerical Value!");
    }
    
  } 

  const handle_Emp_ID = (e)=>{
    e.preventDefault();
    setEmp_ID(e.target.value);

    //validation
    if ((e.target.value).length>7) {
      alert("Limit Exceeded!");
    }
    
  } 
  
  const handle_Bank_Account = (e)=>{
    e.preventDefault();
    setBank_Account(e.target.value);

    //validation
    if ((e.target.value).length>11) {
      alert("Limit Exceeded!");
    }
    
  } 
  
  const handle_Bank_Name = (e)=>{
    e.preventDefault();
    setBank_Name(e.target.value);

   
    
  } 
 
  const handle_Bank_Branch = (e)=>{
    e.preventDefault();
    setBank_Branch(e.target.value);

   
    
  } 
  
  const handle_Emp_Position = (e)=>{
    e.preventDefault();
    setEmp_Position(e.target.value);

    
  } 
  
  const handle_Working_Days_For_Month = (e)=>{
    e.preventDefault();
    setWorking_Days_For_Month(e.target.value);

    //validation
    if (!Number(e.target.value)) {
      alert("Only Numbers Can Enter!");
    }
    
  } 
  
  const handle_Total_Days_For_Month = (e)=>{
    e.preventDefault();
    setTotal_Days_For_Month(e.target.value);

    //validation
    if (!Number(e.target.value)) {
      alert("Only Numbers Can Enter!");
    }
    
  } 
  
  const handle_Basic_Salary = (e)=>{
    e.preventDefault();
    setBasic_Salary(e.target.value);

    //validation
    if (!Number(e.target.value)) {
      alert("Only Numbers Can Enter!");
    }
    
  } 
 
  const handle_Conv_Allowance = (e)=>{
    e.preventDefault();
    setConv_Allowance(e.target.value);

    //validation
    if (!Number(e.target.value)) {
      alert("Only Numbers Can Enter!");
    }
    
  } 
  
  const handle_Performance_Allowance = (e)=>{
    e.preventDefault();
    setPerformance_Allowance(e.target.value);
    
  } 
  
  const handle_Total_Earning = (e)=>{
    e.preventDefault();
    setTotal_Earning(e.target.value);
    
  } 

// clear all input feilds after submiting
const resetInputField=()=>{
    setDateForSalary("")
    setEmp_Name("")
    setEmp_ID("")
    setEmp_Position("")
    setBank_Account("")
    setBank_Name("")
    setBank_Branch("")
    setWorking_Days_For_Month("")
    setTotal_Days_For_Month("")
    setBasic_Salary("")
    setPerformance_Allowance("")
    setConv_Allowance("")
    setTotal_Earning("")
};




//handle the submit data
const handleSubmit = async(e)=>{
    //cancel the submit if its cancelable
    e.preventDefault();

    if (DateForSalary===''||Emp_Name===''||Emp_ID===''||Emp_Position===''||
    Bank_Account===''|| Bank_Name===''||Bank_Branch===''||Working_Days_For_Month===''||
    Total_Days_For_Month===''||Basic_Salary===''||
    Conv_Allowance===''){

    alert("Fill All The Details!")

} else{

    let newSalarySheet ={
        DateForSalary:DateForSalary,
        Emp_Name:Emp_Name,
        Emp_ID:Emp_ID,
        Emp_Position:Emp_Position,
        Bank_Account:Bank_Account,
        Bank_Name:Bank_Name,
        Bank_Branch:Bank_Branch,
        Working_Days_For_Month:Working_Days_For_Month,
        Total_Days_For_Month:Total_Days_For_Month,
        Basic_Salary:Basic_Salary,
        Performance_Allowance:num3,
        Conv_Allowance:Conv_Allowance,
        Total_Earning:tot
       // Total_Earning:Basic_Salary+Performance_Allowance+Conv_Allowance

    }

    console.log("Sending Salary Sheet Details...",newSalarySheet);

    let data = await axios.post('http://localhost:5000/EmpSalary/Save',{

        DateForSalary:DateForSalary,
        Emp_Name:Emp_Name,
        Emp_ID:Emp_ID,
        Emp_Position:Emp_Position,
        Bank_Account:Bank_Account,
        Bank_Name:Bank_Name,
        Bank_Branch:Bank_Branch,
        Working_Days_For_Month:Working_Days_For_Month,
        Total_Days_For_Month:Total_Days_For_Month,
        Basic_Salary:Basic_Salary,
        Performance_Allowance:num3,
        Conv_Allowance:Conv_Allowance,
        Total_Earning:tot
      // Total_Earning:Basic_Salary+Performance_Allowance+Conv_Allowance



    });

    console.log("Saved Data : ",data);

    if(data.status !==200){
        alert("Data Saving Failed!")
    } else{
        alert("You Are Saving The Data!")
        navigate('/AdminViewSalary')
    }

}

}



  return (
    <div>


<div className='FORM2'>

        <div style={{height:'80px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
        <br/><br/>
        <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>CREATE SALARY SHEET</h1>
        <div style={{height:'80px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>

        </div>
           

<form onSubmit={(e) => handleSubmit(e)} style={{ marginTop: '70px',  backgroundImage: `url(${BgAdmin1})`,   backgroundSize: 'cover'}}>
<br/>
                  <button className="btn btn-success" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px'}}>
                  <a href="/AdminViewSalary"
                  style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                  <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>


  <table className='tableSalary' style={{width:"1400px", marginLeft:"60px", marginTop:'50px', background:"rgba(80,80,80,0.45)"}} >
  <br/>
    <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
            <td>
            <div className='form-group'>
                <label>Date:</label><br />
                <input 
                type='date' 
                value={DateForSalary} 
                className='form-control' 
                style={{ marginBottom: '20px', width:'300px' }} 
                onChange={(e) => handle_DateForSalary(e)} 
                required='true' />
            </div>
            </td>
    </tr>
    <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
        <td >
        <div className='form-group'>
            <label>Employee Name :</label><br />
            <input 
            type='text' 
            value={Emp_Name} 
            className='form-control' 
            style={{ marginBottom: '20px' }} 
            onChange={(e) => handle_Emp_Name(e)} 
            required='true' />
        </div>
        </td>
        <td >
        <div className='form-group'>
            <label>Employee ID: </label><br />
            <input type='text'
            value={Emp_ID} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Emp_ID(e)} 
            required='true' />
        </div>
        </td>
        <td >
        <div className='form-group'>
            <label>Employee Positon: </label><br />
            <input type='text'
            value={Emp_Position} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Emp_Position(e)} 
            required='true' />
        </div>
        </td>
    </tr>

    <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
        <td>
        <div className='form-group'>
            <label>Bank Account: </label><br />
            <input type='text'
            value={Bank_Account} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Bank_Account(e)} 
            required='true' />
        </div>
        </td>

        <td>
        <div className='form-group'>
            <label>Bank Branch: </label><br />
            <select 
            type='text'
            id='reason' 
            value={Bank_Branch} 
            className='form-control' 
            style={{ marginBottom: '20px' }} 
            onChange={(e) => handle_Bank_Branch(e)}
            required='true' >
              <option value=" ">Choose</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Other">Other</option> 
              </select>
        </div>
        </td>
        <td >
        <div className='form-group'>
            <label>Bank Name: </label><br />
            <select 
            type='text'
            id='reason' 
            value={Bank_Name} 
            className='form-control' 
            style={{ marginBottom: '20px' }} 
            onChange={(e) => handle_Bank_Name(e)}
            required='true' >
              <option value=" ">Choose</option>
                          <option value="Sampath">Sampath</option>
                          <option value="Peoples'">Peoples'</option>
                          <option value="Other">Other</option> 
              </select>
        </div>
        </td>
    </tr>


    <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
        <td>
        <div className='form-group'>
            <label>Working Days For Month: </label><br />
            <input type='number'
            value={Working_Days_For_Month} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Working_Days_For_Month(e)} 
            required='true' />
        </div>
        </td>

        <td>
        <div className='form-group'>
            <label>Total Days For Month: </label><br />
            <input type='number'
            value={Total_Days_For_Month} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Total_Days_For_Month(e)} 
            required='true' />
        </div>
        </td>
    </tr>
    <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
        <td>
        <div className='form-group'>
            <label>Basic Salary (Rs.): </label><br />
            <input type='number'
            value={Basic_Salary} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Basic_Salary(e)} 
            required='true' />
        </div>
        </td>
        <td>
        <div className='form-group'>
            <label>Conveyance Allowance (Rs.): </label><br />
            <input type='number'
            value={Conv_Allowance} 
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Conv_Allowance(e)} 
            required='true' />
        </div>
        </td>
        <td>
        <div className='form-group'>
            <label>Performance Allowance (Rs.): </label><br />
            <input 
            value={num3} 
            placeholder={num3}
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Performance_Allowance(e)} 
            />
        </div>
        </td>
      </tr>

      <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
        <td>
        <div className='form-group'>
            <label>Total Earning (Rs.): </label><br />
            <input
            value={tot} 
            placeholder={tot}
            className='form-control' 
            style={{ marginBottom: '20px' }}
            onChange={(e) => handle_Total_Earning(e)} 
              />
        </div>
        </td>

    </tr>
   
   <br/><br/>
  </table> 
<br/>
  <table>
      <tr>
        <td>
        <button type='submit' className='btn btn-success' style={{marginLeft:" 600px"}} > 
        <i class="fa-solid fa-circle-check"></i>
        &nbsp; SUBMIT</button>
        </td>
        
        <td>
        <button className="btn btn-warning" onClick={resetInputField} style={{marginLeft:" 170px"}}> 
        <i class="fa-solid fa-broom"></i>
        &nbsp; CLEAR</button>
        </td>
      </tr>
      <br/>
      </table>
  
</form>
</div>




    </div>
  )
}

export default AdminCreateSalary