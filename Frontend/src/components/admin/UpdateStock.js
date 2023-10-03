//import react
import React from 'react';
//import react hooks
import {useState, useEffect} from 'react';
//import axios
import axios from 'axios';
//import useParams (use to access the matching data)
import{useParams} from "react-router-dom";

//import backgroud picture
import BgAdmin2 from '../../img/pic.webp';


function Update() {

  //track the states and set values using useState
  const [p92,setp92]=useState("");
  const [p95,setp95]=useState("");
  const [superd,setsuperd]=useState("");
  const [autod,setautod]=useState("");
  const [mdate,setmdate]=useState("");

  //initializing an id that  match with the data
  // definition -> returns an object of key/value pairs of the 
  //dynamic params from the current URL that were matched by the <Route path>
  const id= useParams();

  const [stockUpdate]=useState({

    p92:"",
    p95:"",
    superd:"",
    autod:"",
    mdate:""
    
  })

//   //calculate total salary
// let num1 = Basic_Salary;
// let num2 = Conv_Allowance;
// let num3= Working_Days_For_Month*100; //performance allowance 
// let tot= parseInt(num1)+parseInt(num2)+parseInt(num3);

  //assign the updated value
  const ChangeOnClick = async(e)=>{
    e.preventDefault();

    console.log("data");

    const formData= new FormData();

  formData.append("p92",p92);
  formData.append("p95",p95);
  formData.append("superd",superd);
  formData.append("autod",autod);
  formData.append("mdate",mdate);




    setp92("")
    setp95("")
    setsuperd("")
    setautod("")
    setmdate("")


console.log(formData.get('mdate'));

stockUpdate.p92=formData.get('p92');
stockUpdate.p95=formData.get('p95');
stockUpdate.superd=formData.get('superd');
stockUpdate.autod=formData.get('autod');
stockUpdate.mdate=formData.get('mdate');


console.log(stockUpdate);

//relevant id for the update
console.log(id)

//Updating function
await axios.put(`http://localhost:5000/UpdateStock/${id?.id}`,stockUpdate)
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

    axios.get(`http://localhost:5000/GetOneStock/${id?.id}`)
  .then(res=>{
    console.log("data",res);
    setp92(res.data.Onedata.p92)
    setp95(res.data.Onedata.p95)
    setsuperd(res.data.Onedata.superd)
    setautod(res.data.Onedata.autod)
    setmdate(res.data.Onedata.mdate)
  

  }).catch(err => console.log(err));

},[]);


  return (
    <div>


<div className='FORM2'>

        <div style={{height:'80px', backgroundColor:"#C5CAE9", marginTop:'-20px'}}>
        <br/><br/>
        <h1 style={{color:'black', textAlign:'center',fontSize:"60px"}}>Fuel Availability</h1>
        <div style={{height:'80px', backgroundColor:"#7986CB", marginTop:'-50px'}}></div>

        </div> 
        <div style={{ marginTop: '54px',  backgroundImage: `url(${BgAdmin2})`,   backgroundSize: 'cover'}}>            
        <br/>

           <form style={{ marginTop: '70px',   backgroundSize: 'cover'}}>


            <br/>
            <button className="btn btn-success" style={{padding:'9px 9px',backgroundColor:'#3895d3', marginLeft:'10px', marginLeft:'150px'}}>
                      <a href="/AvailableFuel"
                      style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'17px'}}> 
                      <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                      </button>
             <table className='tableSalary' style={{width:"1400px", marginLeft:"150px", marginTop:'10px', background:"rgba(100,80,120,0.45)"}} >
            
             
               <tr style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black', marginLeft:'50px'}}>
                <center>
                       <td>
                        &nbsp;
                       <div className='form-group'>
                           <label>&nbsp;<h3>Date:</h3></label><br />
                           <input 
                           type="date" 
                           value={mdate} 
                           className='form-control' 
                           style={{ marginBottom: '20px', width:'300px' }} 
                           onChange={e => setmdate(e.target.value)} 
                            />
                       </div>
                       </td>
                  </center>
               </tr>
               <center>
               <div className='row'>
               <div className='col'>
               <td style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black', marginLeft:'50px'}}>
               <div className='form-group'>
                   <label>&nbsp;<h3>Petrol 92 Octane :</h3></label><br />
                   <input 
                   type='text' 
                   value={p92} 
                   className='form-control' 
                   style={{ marginBottom: '20px'}} 
                   onChange={e => setp92(e.target.value)} 
                    />
               </div>
               </td>
               </div>
               <div className='col'>
               <td style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black', marginLeft:'50px'}}>
               <div className='form-group'>
                   <label>&nbsp;<h3>Petrol 95 Octane : </h3></label><br />
                   <input type='text'
                    value={p95} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={e => setp95(e.target.value)} 
                     />
               </div>
               </td>
               </div>
               <tr/>
               </div>
               <div className='row'>
               <div className='col'>
               <td style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black', marginLeft:'50px'}} >
               <div className='form-group'>
                   <label>&nbsp;<h3>Super Diesel : </h3></label><br />
                   <input type='text'
                    value={superd} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={e => setsuperd(e.target.value)} 
                     />
               </div>
               </td>
              </div>
              <div className='col'>
               <td style={{fontSize:'18px', color:"white",textShadow: '1px 2px 5px black', marginLeft:'50px'}}>
               <div className='form-group'>
                   <label>&nbsp;<h3>Auto Diesel : </h3></label><br />
                   <input type='text'
                    value={autod} 
                    className='form-control' 
                    style={{ marginBottom: '20px' }}
                    onChange={e => setautod(e.target.value)} 
                     />
               </div>
               </td>
               </div>
               </div>
               </center>
              
              <br/><br/>
             </table> 
             <table>
                  <tr>
                    <center>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button className="btn btn-secondary" type="submit" style={{marginTop:'15px', width:"200px", 
                      marginLeft:"350px",backgroundColor:"#484846"}} onClick={(e)=>ChangeOnClick(e)} >
                      <i class="fa-solid fa-pen-to-square"></i>
                      &nbsp; <h4>UPDATE</h4>
                      </button>

                     
                      </center>
                  </tr>
                  <br/><br/><br/><br/><br/>
              </table>
           
            
           </form>
           </div>





</div>

    </div>
  )
}

export default Update