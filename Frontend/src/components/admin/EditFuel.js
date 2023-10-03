import React  from 'react';
import {useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import grp from '../../img/ram.jpg';

function UpdateFuel() {




  //use state to track state in function components
  const [Date, setDate]=useState("");
  const [amount, setamount]=useState("");
  const [Fname, setFname]=useState("");
  const [Ftype, setFtype]=useState("");
  const [price, setprice]=useState("");
  
  const id = useParams();

  
  const [fuel] = useState({

     Date:"",
     amount:"",
     Fname:"",
     Ftype:"",
     price:""
 })
   
//assign the updated value to existing data  
const ChangeOnClick = async(e)=>{
    e.preventDefault();
  
    console.log("data");
  
    const formData = new FormData();
  
    formData.append("Date",Date);
    formData.append("amount",amount);
    formData.append("Fname",Fname);
    formData.append("Ftype",Ftype);
    formData.append("price",price);
    

    setDate("")
    setamount("");
    setFname("");
    setFtype("");
    setprice("");
    
console.log(formData.get('Date'));


fuel.Date=formData.get('Date');
fuel.amount=formData.get('amount');
fuel.Fname=formData.get('Fname');
fuel.Ftype=formData.get('Ftype');
fuel.price=formData.get('price');


console.log(fuel);

//update process 
console.log(id)
await axios.put(`http://localhost:5000/Update/${id.id}`,fuel)
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

  axios.get(`http://localhost:5000/GetOne/${id.id}`)
  .then(res=>{
    console.log("data",res);
    setDate(res.data.Onedata.Date)
    setamount(res.data.Onedata.amount)
    setFname(res.data.Onedata.Fname)
    setFtype(res.data.Onedata.Ftype)
    setprice(res.data.Onedata.price)
    
   
  }).catch(err => console.log(err));



},[]);



  
     

    return (

          
                  
        //   <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
      <div>
        <br/><br/>
        <center>
        <center>
        <h1 style={{marginTop:'-50px',marginBottom:'3px', backgroundColor:'#04619F', color:'white'}}>Update Details</h1>
        </center>
        <table  width = "1800" height = "600">
            <tr>
              <td>
              <div class="container-fluid bg-3 text-left">
              <br/><br/>
              <form>
             
                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label  className="form-label">Date :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text" className="form-control"
                              name="Date"
                              style={{marginBottom:'15px',color:'black'}}
                              value={Date}
                              onChange={e => setDate(e.target.value)}
                              
                            />
                            </div>

                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label  className="form-label">Received Amount :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text" className="form-control"
                              name = "amount"
                              onChange={e => setamount(e.target.value)}
                              value={amount}
                            />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                              <h3><label className="form-label" >Fuel Name :</label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                              <input type="text"
                              list="type"
                              name="Fname"
                              className="form-control"            
                              value={Fname} 
                              onChange={e => setFname(e.target.value)} required
                             />
                            </div>
                            

                            <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginRight:'30px'}}>  Type of Fuel </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="text"
                            name="Ftype"
                            className="form-control"
                            value={Ftype} 
                            onChange={e => setFtype(e.target.value)}
                        
                            />
                            </div>


                             <div className="form-group" style={{marginBottom:'15px',color:'black', marginLeft:'20px'}}>
                            <h3><label style={{margineBottom:'5px', marginLeft:'10px', marginRight:'30px'}}>  Price per Litre : </label></h3>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                            name="price"
                            className="form-control"
                            value={price} 
                            onChange={e => setprice(e.target.value)}
                        
                                />&nbsp;&nbsp;&nbsp;&nbsp;
                             </div>
          
    
                         

                            
          
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 


                        <button className="btn btn-outline-primary btn-lg" type="submit" onClick={(e)=>ChangeOnClick(e)}>
                        Update Details </button>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    
                        <br/>
                            
                        <div>

                       
                        <br/><br/>
                        </div>
                        
                        </form>        
                        <br/>
                            
            </div>
            
            </td>
            
            <td><img src={grp} class="img-fluid" alt="" width="900" height="1000" marginLeft="300px"/></td>
            </tr>
            </table>
            </center>
      </div>
    // </div>
  )
};



export default UpdateFuel