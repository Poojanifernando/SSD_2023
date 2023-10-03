import React, { Component } from  'react';
import axios from 'axios';
//import the background image
import backgroundImage from '../../img/back1234.jpg';  

//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'



export default class ViewFuelReport extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        fuelreport: []
      };
    }

    
    //pdf generator function
    jsPdfGenarator = ()=>{
      var doc = new jsPdf('p','pt');

      doc.text(210,30,"Monthly Report - Fuel distribution details")
      doc.autoTable({html:'#pdf'})

      doc.autoTable({
        columnStyles:{europe:{halign:'center'}},
        margin:{top:10},
      })
      doc.save("FuelDistributionD.pdf");


    }
    
    componentDidMount(){
      this.retrieveFuelReport();
    }
   
    
    //retrive all the data in to the page from the database
    retrieveFuelReport(){
      axios.get("http://localhost:5000/FuelReport").then(res =>{
        if(res.data.success){
          this.setState({
            fuelreport:res.data.existingFuelReport
          });
        
          console.log(this.state.fuelreport)
        }
      });
    }
    
    //delete function
    onDelete = (id)=>{
      axios.delete(`http://localhost:5000/FuelReport/Delete/${id}`).then((res)=>{
      this.retrieveFuelReport();
      })
      alert("Deleted succesfully");
  } 

  //search function 
  //search by fuel type  
    filterData(fuelreport,searchKey){
      const result = fuelreport.filter((fuelreport) =>
      fuelreport.FuelType.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({fuelreport:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:5000/FuelReport").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingFuelReport,searchKey)
        }
      });
    }


  
    
  
      render(){
        return (
    
    
    
    
   
                     
    <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
    <div>
      
        <h1 style={{ textAlign:'center',fontSize:"60px"}}>Fuel   Distributed Details</h1>
        
        <div style={{height:'80px', backgroundColor:"#87ceeb", marginTop:'-80px'}}></div>
      
        <br/>
            <div className="col-md-8 mt-4 mx-auto">
           
                 
              
            </div></div>
        


        <br/>    <br/>    <br/>
       


        <button className="btn btn-warning" style={{ marginTop:'-100px',fontSize:'17px', width:'200px', height:'70px'}}><a href='/AddFuelReport'>Add New Data</a></button>
        <br/> <br/>

        <center>
        <div className="col-lg-9 mt-2 mb-2" style={{marginLeft:'-770px'}}>
              <input
              className="form-control"
              style={{marginLeft:'-200px', width:'700px'}}
              type="search"
              placeholder="search by fuel type"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
            </center>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
        
       
            <br/>
            <center>
            <table className = "table table-bordered" id="pdf" style={{marginLeft:'-80px', width:'1600px', backgroundColor:'black'}}>
                <thead>
                    <tr>
                    <th style={{color:'white'}} scope = "col"></th>  
                    <th style={{color:'white'}} scope = "col" >Reference ID</th>
                    <th style={{color:'white'}} scope = "col">Fuel Type</th>
                    <th style={{color:'white'}} scope = "col">Received Date</th> 
                    <th style={{color:'white'}} scope = "col">Received Amount</th> 
                    <th style={{color:'white'}} scope = "col">MotoBikes</th>
                    <th style={{color:'white'}} scope = "col">Cars</th>  
                    <th style={{color:'white'}} scope = "col">ThreeWheel</th>
                    <th style={{color:'white'}} scope = "col">Buses</th> 
                    <th style={{color:'white'}} scope = "col">Vans</th> 
                    <th style={{color:'white'}} scope = "col">Other</th>
                    <th style={{color:'white'}} scope = "col">Total Amount</th>
                    <th style={{color:'white'}} scope = "col">Octane 92</th>
                    <th style={{color:'white'}} scope = "col">Octane 95</th>
                    <th style={{color:'white'}} scope = "col">Deisal</th>
                    <th style={{color:'white'}} scope = "col">Remainign Amount</th>
                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.fuelreport.map((fuelreport,index) =>(
                <tr key ={index} style={{color:'#F7DE08'}}>
                  <th scope = "row">{index+1}</th>
                  <td>{fuelreport.RefID}  </td>  
                  <td>{fuelreport.FuelType}</td>
                  <td>{fuelreport.Rdate}</td>
                  <td>{fuelreport.Ramount}</td>  
                  <td>{fuelreport.MotoBikes}  </td> 
                  <td>{fuelreport.Cars}</td>  
                  <td>{fuelreport.ThreeWheel}</td> 
                  <td>{fuelreport.Buses}</td>  
                  <td>{fuelreport.Vans}</td> 
                  <td>{fuelreport.Other}</td> 
                  <td>{fuelreport.TotalAmount}</td> 
                  <td>{fuelreport.Oct92}</td> 
                  <td>{fuelreport.Oct95}</td> 
                  <td>{fuelreport.Diesal}</td> 
                  <td>{fuelreport.Remaintot}</td> 
               
                  <td>
    
                    <br/>
                    
                    <a className="btn btn-warning"  href={`/UpdateFuelReport/${fuelreport._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                              
                    &nbsp;  &nbsp;  
                   
                    <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(fuelreport._id)}>
                    <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                    </a>

                  
                 
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>

        </center>
        <br/>
        <center>
        <button className="btn btn-warning" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                             color:'blue', width:'300px', height:'70px'}} >
                              <i class="fa-solid fa-download"></i>&nbsp;Generate Report as PDF
        </button>
        </center>
        <br/>

        <h5>Note : All the amounts are in Liters</h5>
       
        </div>
         

 

        
  

        
        )
    }
    
    }


