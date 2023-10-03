//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

//import backgroud picture
import BgAdmin3 from '../../img/BgAdmin3.webp';


function AdminUpdateSalary() {

  //track the states and set values using useState
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

  //initializing an id that  match wiht the data
  // definition -> returns an object of key/value pairs of the 
  //dynamic params from the current URL that were matched by the <Route path>
  const id= useParams();

  const [EmpSalUpdate]=useState({

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
    Total_Earning:"",
  })

  //calculate total salary
let num1 = Basic_Salary;
let num2 = Conv_Allowance;
let num3= Working_Days_For_Month*100; //performance allowance 
let tot= parseInt(num1)+parseInt(num2)+parseInt(num3);

  //assign the updated value
  const ChangeOnClick = async(e)=>{
    e.preventDefault();
     // Check for invalid characters in Emp_Name, Emp_ID, Emp_Position, and Bank_Account
     const invalidCharRegex = /[^a-zA-Z0-9]/;

     if (invalidCharRegex.test(Emp_Name) || invalidCharRegex.test(Emp_ID) ||
         invalidCharRegex.test(Emp_Position) || invalidCharRegex.test(Bank_Account)) {
       alert("Invalid characters in one or more fields. Please use only letters and numbers.");
       return;
     }

    console.log("data");

    const formData= new FormData();

  formData.append("DateForSalary",DateForSalary);
  formData.append("Emp_Name",Emp_Name);
  formData.append("Emp_ID",Emp_ID);
  formData.append("Emp_Position",Emp_Position);
  formData.append("Bank_Account",Bank_Account);
  formData.append("Bank_Name",Bank_Name);
  formData.append("Bank_Branch",Bank_Branch);
  formData.append("Working_Days_For_Month",Working_Days_For_Month);
  formData.append("Total_Days_For_Month",Total_Days_For_Month);
  formData.append("Basic_Salary",Basic_Salary);
  formData.append("Performance_Allowance",num3);
  formData.append("Conv_Allowance",Conv_Allowance);
  formData.append("Total_Earning",tot);




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


console.log(formData.get('Emp_Name'));

EmpSalUpdate.DateForSalary=formData.get('DateForSalary');
EmpSalUpdate.Emp_Name=formData.get('Emp_Name');
EmpSalUpdate.Emp_ID=formData.get('Emp_ID');
EmpSalUpdate.Emp_Position=formData.get('Emp_Position');
EmpSalUpdate.Bank_Account=formData.get('Bank_Account');
EmpSalUpdate.Bank_Name=formData.get('Bank_Name');
EmpSalUpdate.Bank_Branch=formData.get('Bank_Branch');
EmpSalUpdate.Working_Days_For_Month=formData.get('Working_Days_For_Month');
EmpSalUpdate.Total_Days_For_Month=formData.get('Total_Days_For_Month');
EmpSalUpdate.Basic_Salary=formData.get('Basic_Salary');
EmpSalUpdate.Performance_Allowance=formData.get('Performance_Allowance');
EmpSalUpdate.Conv_Allowance=formData.get('Conv_Allowance');
EmpSalUpdate.Total_Earning=formData.get('Total_Earning');


console.log(EmpSalUpdate);

//relevant id for the update
console.log(id)

//Updating function
await axios.put(`http://localhost:5000/UpdateSalarySheet/${id?.id}`,EmpSalUpdate)
.then(res=>{
  console.log("return data", res);
  alert("Update Is Succesess!!")
})
.catch(err=>{
  alert("Update Is Failed!!");
  console.log(err);
});

  }

  //page refresher
  function refreshPage() {
    window.location.reload(false);
  }

  //get a data that reference to the id
  useEffect(function effectFunction(){

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


  return (
    <div>


<div className='FORM2'>

        <div style={{height:'80px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
        <br/><br/>
        <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>UPDATE SALARY SHEET</h1>
        <div style={{height:'80px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>

        </div>           


           <form style={{ marginTop: '70px',  backgroundImage: `url(${BgAdmin3})`,   backgroundSize: 'cover'}}>
           
           
                  <button className="btn btn-success" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px', marginTop:'30px'}}>
                  <a href="/AdminViewSalary"
                  style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                  <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                  </button>


             <table className='tableSalary' style={{width:"1400px", marginLeft:"60px", marginTop:'50px', background:"rgba(80,80,120,0.45)"}} >
             <br/>
               <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
                       <td>
                       <div className='form-group'>
                           <label>Date:</label><br />
                           <input 
                           type="date" 
                           value={DateForSalary} 
                           className='form-control' 
                           style={{ marginBottom: '20px', width:'300px' }} 
                           onChange={e => setDateForSalary(e.target.value)} 
                            />
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
                   onChange={e => setEmp_Name(e.target.value)} 
                    />
               </div>
               </td>
               <td >
               <div className='form-group'>
                   <label>Employee ID: </label><br />
                   <input type='text'
                    value={Emp_ID} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={e => setEmp_ID(e.target.value)} 
                     />
               </div>
               </td>
               <td >
               <div className='form-group'>
                   <label>Employee Positon: </label><br />
                   <input type='text'
                    value={Emp_Position} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={e => setEmp_Position(e.target.value)} 
                     />
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
                    onChange={e => setBank_Account(e.target.value)} 
                     />
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
                   onChange={e => setBank_Branch(e.target.value)}
                   >
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
                   onChange={e => setBank_Name(e.target.value)}
                    >
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
                    onChange={e => setWorking_Days_For_Month(e.target.value)} 
                    />
               </div>
               </td>
           
               <td>
               <div className='form-group'>
                   <label>Total Days For Month: </label><br />
                   <input type='number'
                    value={Total_Days_For_Month} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={e => setTotal_Days_For_Month(e.target.value)} 
                     />
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
                    onChange={e => setBasic_Salary(e.target.value)} 
                     />
            
               </div>
               </td>
               <td>
               
               <div className='form-group'>
             
                   <label>Conveyance Allowance (Rs.): </label><br />
                  
                   <input type='number'
                    value={Conv_Allowance} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={ e => setConv_Allowance(e.target.value)} 
                     />
                      
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
                    onChange={ e => setPerformance_Allowance(e.target.num3)} 
                     />
                      
               </div>
               </td>
              </tr>

              <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black'}}>
               <div className='form-group'>
              
                   <label>Total Earning (Rs.): </label><br />
                   
                   <input
                    value={tot} 
                    placeholder={tot}
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={(e) => setTotal_Earning(e.target.tot)} 
                     />
                 
               </div>
              
               </tr>
              
              <br/><br/>
             </table> 
             <table>
                  <tr>
                    <td>
                      <button className="btn btn-warning" style={{marginLeft:'390px',width:"200px",marginTop:'15px'}}
                      onClick={refreshPage}>  
                      <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp;REFRESH
                      </button>
                   </td>
                   <td>
                      <button className="btn btn-secondary" type="submit" style={{marginTop:'15px', width:"200px", 
                      marginLeft:"350px",backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                      <i class="fa-solid fa-pen-to-square"></i>
                      &nbsp; UPDATE
                      </button>
                  </td>
                  </tr>
                  <br/>
              </table>
           
            
           </form>
           </div>







    </div>
  )
}

export default AdminUpdateSalary