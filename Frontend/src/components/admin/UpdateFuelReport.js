import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"; 
//import the background image
import backgroundImage from '../../img/addbackground.jpg';   

function UpdateFuelReport(){

  const handleTot = (e)=>{
    setTotalAmount(parseInt(MotoBikes) + parseInt(Cars) + parseInt(Vans) + parseInt(Buses) + parseInt(ThreeWheel) + parseInt(Other));
    e.preventDefault();
  }

  const handleRem = (e)=>{
    setRemaintot(parseInt(Oct92) + parseInt(Oct95) + parseInt(Diesal));
    e.preventDefault();
  }


const [RefID, setRefID]=useState("");
const [FuelType, setFuelType]=useState("");
const [Rdate, setRdate]=useState("");
const [Ramount, setRamount]=useState("");
const [MotoBikes, setMotoBikes]=useState("");
const [Cars, setCars]=useState("");
const [ThreeWheel, setThreeWheel]=useState("");
const [Buses, setBuses]=useState("");
const [Vans, setVans]=useState("");
const [Other, setOther]=useState("");
const [TotalAmount, setTotalAmount]=useState("");
const [Oct92, setOct92]=useState("");
const [Oct95, setOct95]=useState("");
const [Diesal, setDiesal]=useState("");
const [Remaintot, setRemaintot]=useState("");

const id = useParams();

  
  const [fuelreport] = useState({

     RefID:"",
     FuelType:"",
     Rdate:"",
     Ramount:"",
     MotoBikes:"",
     Cars:"",
     ThreeWheel:"",
     Buses:"",
     Vans:"",
     Other:"",
     TotalAmount:"",
     Oct92:"",
     Oct95:"",
     Diesal:"",
     Remaintot:""

 })

 //assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();

  // Check for invalid characters in RefID
  const invalidCharRegex = /[^a-zA-Z0-9]/;
  if (invalidCharRegex.test(RefID)) {
    alert("Reference ID should only contain letters and numbers.");
    return;
  }
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("RefID",RefID);
    formData.append("FuelType",FuelType);
    formData.append("Rdate",Rdate);
    formData.append("Ramount",Ramount);
    formData.append("MotoBikes",MotoBikes);
    formData.append("Cars",Cars);
    formData.append("ThreeWheel",ThreeWheel);
    formData.append("Buses",Buses);
    formData.append("Vans",Vans);
    formData.append("Other",Other);
    formData.append("TotalAmount",TotalAmount);
    formData.append("Oct92",Oct92);
    formData.append("Oct95",Oct95);
    formData.append("Diesal",Diesal);
    formData.append("Remaintot",Remaintot);

    setRefID("")
    setFuelType("");
    setRdate("");
    setRamount("");
    setMotoBikes("");
    setCars("");
    setThreeWheel("");
    setBuses("");
    setVans("");
    setOther("");
    setTotalAmount("");
    setOct92("");
    setOct95("");
    setDiesal("");
    setRemaintot("");
   
console.log(formData.get('Date'));

// Update the fuelreport state with form data
fuelreport.RefID=formData.get('RefID');
fuelreport.FuelType=formData.get('FuelType');
fuelreport.Rdate=formData.get('Rdate');
fuelreport.Ramount=formData.get('Ramount');
fuelreport.MotoBikes=formData.get('MotoBikes');
fuelreport.Cars=formData.get('Cars');
fuelreport.ThreeWheel=formData.get('ThreeWheel');
fuelreport.Buses=formData.get('Buses');
fuelreport.Vans=formData.get('Vans');
fuelreport.Other=formData.get('Other');
fuelreport.TotalAmount=formData.get('TotalAmount');
fuelreport.Oct92=formData.get('Oct92');
fuelreport.Oct95=formData.get('Oct95');
fuelreport.Diesal=formData.get('Diesal');
fuelreport.Remaintot=formData.get('Remaintot');

console.log(fuelreport);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/FuelReport/update/${id.id}`,fuelreport)
.then(res=>{
  console.log("Return Data",res);
  alert("Update Success!!");

})
.catch(err=>{
  alert("Update Failed!!");
  console.log(err);
});

}



//get one data to update
useEffect(function effectFunction() {
  console.log("get ID",id);

  axios.get(`http://localhost:5000/FuelReport/getbyid/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setRefID(res.data.fuelreport.RefID)
    setFuelType(res.data.fuelreport.FuelType)
    setRdate(res.data.fuelreport.Rdate)
    setRamount(res.data.fuelreport.Ramount)
    setMotoBikes(res.data.fuelreport.MotoBikes)
    setCars(res.data.fuelreport.Cars)
    setThreeWheel(res.data.fuelreport.ThreeWheel)
    setBuses(res.data.fuelreport.Buses)
    setVans(res.data.fuelreport.Vans)
    setOther(res.data.fuelreport.Other)
    setTotalAmount(res.data.fuelreport.TotalAmount)
    setOct92(res.data.fuelreport.Oct92)
    setOct95(res.data.fuelreport.Oct95)
    setDiesal(res.data.fuelreport.Diesal)
    setRemaintot(res.data.fuelreport.Remaintot)
   
  }).catch(err => console.log(err));



},[]);






    return (

                
      <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}> 
       
            
                      
      <div>
        <div>
        <br/><br/>
          
            <center>
            <h1 style={{ textAlign:'center',fontSize:"60px", backgroundColor:"#87ceeb", marginTop:'-50px'}}>Fuel   Distributed Details - Update</h1>
        
                
                  <br/><br/>
                  <table style={{backgroundColor:"black"}}>
                  <tr>
                    <th>
                      <br/><br/>
                         <form style={{marginLeft:'30px', marginRight:'200px', marginTop:'-40px'}}>
               
                          <br/>
                            <table>
                              <thead>
                                <tr>
                                  <th>
                        
                                 <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                  <label  className="form-label">Reference ID :</label>
                                  <input type="text" className="form-control"
                                  name="RefID"
                                  value={RefID} 
                                  onChange={e => setRefID(e.target.value)}
                                />
                                </div>
                           
                                </th>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                              
                                <th>
                            
                                <div className="form-group" style={{marginBottom:'15px', marginLeft:'-250px',color:'white'}}>
                                  <label className="form-label" >Fuel Type :</label>
                                  <input type="text"
                                  list="type"
                                  name="FuelType"
                                  className="form-control"
                                  placeholder="Select"              
                                  value={FuelType} 
                                  onChange={e => setFuelType(e.target.value)}
                                 />
                                  <datalist id="type">
                                    <option value="Petrol Octane 95"></option>
                                    <option value="Petrol Octane 92"></option>
                                    <option value="Petrol"></option>
                                    <option value="Diesal"></option>
                                    <option value="Super-Diesal"></option>
                                    <option value="Auto-Diesal"></option>
                                  </datalist>
                                </div>
                                
    
                                </th>
                                </tr>
                      </thead>
                      <br/>
                      <tbody>
                        <tr>
    
                                  <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                  <label  className="form-label">Received Date :</label>
                                  <input type="date" className="form-control"
                                  name = "Rdate"
                                  value={Rdate} 
                                  onChange={e => setRdate(e.target.value)}
                                />
                                </div>
                                </tr>
                               
                               <tr>
                              <td>
                                <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Received Amount: </label>
                                <input type="number"
                                name="Ramount"
                                className="form-control"
                                value={Ramount} 
                                onChange={e => setRamount(e.target.value)}
                                placeholder="start time"
                            
                                />
                                </div>
                                </td>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                
                   
                                 </tr>
                                <br/>
                                <tr>
                                  
                                 <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-18px',color:'white'}}><u><b><i>Provided Fuel Amounts</i></b></u></h5>
                                 </tr>
                                 <tr>
                                <td>
                                 <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Motobikes: </label>
                                <input type="number"
                                name="MotoBikes"
                                className="form-control"
                                value={MotoBikes} 
                                onChange={e => setMotoBikes(e.target.value)}
                                placeholder="number of motobikes"
                            
                                    />
                                 </div>
                                </td>
    
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                               
                               
                                <td>
                                 <div className="form-group" style={{marginBottom:'15px', marginLeft:'-250px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Cars: </label>
                                <input type="number"
                                 name="Cars"
                                 className="form-control"
                                 value={Cars} 
                                 onChange={e => setCars(e.target.value)}
                                 placeholder="number of Cars"
                            
                                    />
                                 </div>
                                 </td>
                                </tr>
                                <tr><td>
                                 <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  ThreeWheel: </label>
                                <input type="number"
                                  name="ThreeWheel"
                                  className="form-control"
                                  value={ThreeWheel} 
                                  onChange={e => setThreeWheel(e.target.value)}
                                 placeholder="number of Vans"
                            
                                    />
                                 </div>
                                 </td>
                                 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                               
    
                                 <td>
                                 <div className="form-group" style={{marginBottom:'15px',marginLeft:'-250px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Buses: </label>
                                <input type="number"
                                  name="Buses"
                                  className="form-control"
                                  value={Buses} 
                                  onChange={e => setBuses(e.target.value)}
                                  placeholder="number of buses"
                            
                                    />
                                 </div>
    
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                 <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Vans: </label>
                                <input type="number"
                                 name="Vans"
                                 className="form-control"
                                 value={Vans} 
                                 onChange={e => setVans(e.target.value)}
                                 placeholder="number of three-whells"
                            
                                    />
                                 </div>
                                </td>
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                               
                                <td>
    
                                 <div className="form-group" style={{marginBottom:'15px',marginLeft:'-250px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Lorry/Others: </label>
                                <input type="number"
                                name ="Other"
                                className="form-control"
                                value={Other} 
                                onChange={e => setOther(e.target.value)}
                                placeholder="number of Lorry/Other"
                            
                                    />
                                 </div>
                                 </td>
                                  <br/>
  
                              
                              
                   
                             </tr>
                             <br/>  <br/>
                             <tr><td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Total Amount: </label>
                                <input type="text"
                                 name="TotalAmount"
                                 className="form-control"
                                 value={TotalAmount} 
                                 onChange={e => setTotalAmount(e.target.value)}
                                placeholder="number of three-whells"
                            
                                    />
                                 </div>

                                <br/>
                                 <button className= "btn btn-primary" style={{marginRight:'200px', blockSize:'50px', width:'100px', height:'40px'}} type="submit" onClick={handleTot}>
                                 Calculate </button> 
                              </td>
                              </tr>
                              <tr>
                                  
                                 <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-18px',color:'white'}}><u><b><i>Remaining Fuel Amounts</i></b></u></h5>
                                 </tr>
  
                                 <tr><td>
                                 <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Octane 92: </label>
                                <input type="number"
                                 name="Oct92"
                                 className="form-control"
                                 value={Oct92} 
                                 onChange={e => setOct92(e.target.value)}
                                placeholder="number of three-whells"
                            
                                    />
                                 </div>
                              </td>
                              </tr>
  
                              <tr><td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Octane 95: </label>
                                <input type="number"
                                 name="Oct95"
                                 className="form-control"
                                 value={Oct95} 
                                 onChange={e => setOct95(e.target.value)}
                                placeholder="number of three-whells"
                            
                                    />
                                 </div>
                              </td>
                              </tr>
  
                              <tr><td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Deisal: </label>
                                <input type="number"
                                 name="Diesal"
                                 className="form-control"
                                 value={Diesal} 
                                 onChange={e => setDiesal(e.target.value)}
                                 placeholder="number of three-whells"
                            
                                    />
                                 </div>
                              </td>
                              </tr>
  
                              <br/><br/>
                              <tr><td>
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                                <label style={{margineBottom:'5px'}}>  Total Remaining: </label>
                                <input type="text"
                                 name="Remaintot"
                                 className="form-control"
                                 value={Remaintot} 
                                 onChange={e => setRemaintot(e.target.value)}
                                placeholder="number of three-whells"
                            
                                    />
                                 </div>

                                <br/>
                                 <button className= "btn btn-primary" style={{marginRight:'200px', blockSize:'50px', width:'100px', height:'40px'}} type="submit" onClick={handleRem}>
                                 Calculate </button>
                              </td>
                              </tr>
                            </tbody>
                             </table> 
                             <br/>
                          
                             <button className="btn btn-primary" style={{marginRight:'0px', blockSize:'50px', width:'250px'}} type="submit" onClick={(e)=>ChangeOnClick(e)}>
                             UPDATE </button>&nbsp;&nbsp;&nbsp;&nbsp;
  
    
                         
                            
                             </form> 
                             
                             </th>
                             </tr>
                             </table>
                          
                            <br/>
                        
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <button className="btn btn-dark" style={{blockSize:'40px',width:'100px'}}><a href = "/ViewFuelReport" >VIEW</a></button>
                                
                            <div>
    
    
                     
                        
    
                            </div>
                            
                           
                            <br/>
                                
       
             
                       
                             
                </center>
                
                </div>
          </div>
        </div>
    
    
    
    
    
      
  

    )

};

export default UpdateFuelReport