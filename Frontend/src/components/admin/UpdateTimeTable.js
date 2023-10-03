import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import backgroundImage from '../../img/backpic.jpg';

function UpdateTimeTable() {




  //use state to track state in function components
  const [Date, setDate]=useState("");
  const [FuelType, setFuelType]=useState("");
  const [ArrivalDate, setArrivalDate]=useState("");
  const [Start, setStart]=useState("");
  const [End, setEnd]=useState("");
  const [MotoBikes, setMotoBikes]=useState("");
  const [Cars, setCars]=useState("");
  const [Vans, setVans]=useState("");
  const [Buses, setBuses]=useState("");
  const [ThreeWheel, setThreeWheel]=useState("");
  const [Other, setOther]=useState("");

  const id = useParams();

  
  const [timetable] = useState({

     Date:"",
     FuelType:"",
     ArrivalDate:"",
     Start:"",
     End:"",
     MotoBikes:"",
     Cars:"",
     Vans:"",
     Buses:"",
     ThreeWheel:"",
     Other:""
 })
   
//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("Date",Date);
    formData.append("FuelType",FuelType);
    formData.append("ArrivalDate",ArrivalDate);
    formData.append("Start",Start);
    formData.append("End",End);
    formData.append("MotoBikes",MotoBikes);
    formData.append("Cars",Cars);
    formData.append("Vans",Vans);
    formData.append("Buses",Buses);
    formData.append("ThreeWheel",ThreeWheel);
    formData.append("Other",Other);

    setDate("")
    setFuelType("");
    setArrivalDate("");
    setStart("");
    setEnd("");
    setMotoBikes("");
    setCars("");
    setVans("");
    setBuses("");
    setThreeWheel("");
    setOther("");
   
console.log(formData.get('Date'));


timetable.Date=formData.get('Date');
timetable.FuelType=formData.get('FuelType');
timetable.ArrivalDate=formData.get('ArrivalDate');
timetable.Start=formData.get('Start');
timetable.End=formData.get('End');
timetable.MotoBikes=formData.get('MotoBikes');
timetable.Cars=formData.get('Cars');
timetable.Vans=formData.get('Vans');
timetable.Buses=formData.get('Buses');
timetable.ThreeWheel=formData.get('ThreeWheel');
timetable.Other=formData.get('Other');

console.log(timetable);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/TimeTables/update/${id.id}`,timetable)
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

  axios.get(`http://localhost:5000/TimeTables/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setDate(res.data.timetable.Date)
    setFuelType(res.data.timetable.FuelType)
    setArrivalDate(res.data.timetable.ArrivalDate)
    setStart(res.data.timetable.Start)
    setEnd(res.data.timetable.End)
    setMotoBikes(res.data.timetable.MotoBikes)
    setCars(res.data.timetable.Cars)
    setVans(res.data.timetable.Vans)
    setBuses(res.data.timetable.Buses)
    setThreeWheel(res.data.timetable.ThreeWheel)
    setOther(res.data.timetable.Other)
   
  }).catch(err => console.log(err));



},[]);



  
     

    return (

          
                  
          <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
          <div>
          <br/><br/>
          <center>
          <center>
          <h1 style={{textAlign:'center',fontSize:"60px", height:'80px', backgroundColor:"#87ceeb", marginTop:'-50px'}}>Fuel Delivery Time Table -Update</h1>
          </center>
        <table  width = "350" height = "600">
            <tr>
                <th>
            
              <br/><br/>
              <form>
             
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label  className="form-label">Date :</label>
                              <input type="text" className="form-control"
                              name="Date"
                              onChange={e => setDate(e.target.value)}
                              value={Date}
                            />
                            </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label  className="form-label">Arrival Date :</label>
                              <input type="text" className="form-control"
                              name = "ArrivalDate"
                              onChange={e => setArrivalDate(e.target.value)}
                              value={ArrivalDate}
                            />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                              <label className="form-label" >Fuel Type :</label>
                              <input type="text"
                              list="type"
                              name="FuelType"
                              className="form-control"
                              placeholder="Select"              
                              value={FuelType} 
                              onChange={e => setFuelType(e.target.value)} required
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
                            

                            <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-15px',color:'white'}}><u>Fuel Dristribution Details</u></h5>

                            <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Start: </label>
                            <input type="time"
                            name="Start"
                            className="form-control"
                            value={Start} 
                            onChange={e => setStart(e.target.value)}
                            placeholder="start time"
                        
                            />
                            </div>


                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  End : </label>
                            <input type="time"
                            name="End"
                            className="form-control"
                            value={End} 
                            onChange={e => setEnd(e.target.value)}
                            placeholder="End time"
                        
                                />
                             </div>
          
                             <h5 class="p-3 mb-2  text-Black"  style={{marginLeft:'-15px',color:'white'}}><u>Estimate Fuel Dristribution Details</u></h5>
                         

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

                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Cars: </label>
                            <input type="number"
                             name="Cars"
                             className="form-control"
                             value={Cars} 
                             onChange={e => setCars(e.target.value)}
                            placeholder="number of Cars"
                        
                                />
                             </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Vans: </label>
                            <input type="number"
                              name="Vans"
                              className="form-control"
                              value={Vans} 
                              onChange={e => setVans(e.target.value)}
                            placeholder="number of Vans"
                        
                                />
                             </div>


                             
                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Buses: </label>
                            <input type="number"
                               name="Buses"
                              className="form-control"
                              value={Buses} 
                              onChange={e => setBuses(e.target.value)}
                            placeholder="number of buses"
                        
                                />
                             </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Three-Wheel: </label>
                            <input type="number"
                             name="ThreeWheel"
                             className="form-control"
                             value={ThreeWheel} 
                             onChange={e => setThreeWheel(e.target.value)}
                            placeholder="number of three-whells"
                        
                                />
                             </div>


                             <div className="form-group" style={{marginBottom:'15px',color:'white'}}>
                            <label style={{margineBottom:'5px'}}>  Lorry/Others: </label>
                            <input type="number"
                            name ="Other"
                            className="form-control"
                            value={Other} 
                            onChange={e => setOther(e.target.value)}
                            placeholder="number of Lorry/Other"
                        
                                />
                             </div>
               
          
          
                           
                        <button className="btn btn-primary" type="submit" onClick={(e)=>ChangeOnClick(e)}>
                        UPDATE </button>&nbsp;&nbsp;&nbsp;&nbsp;

                        <button className="btn btn-warning"><a href = "/ViewTimeTable" >VIEW</a></button>
                        &nbsp;
                        <br/>
                            
                        <div>


                        <br/><br/>
                        </div>
                        
                        </form>        
                        <br/>
                            
   
            </th>
            </tr>
            </table>
            </center>
      </div>
    </div>
  )
};



export default UpdateTimeTable