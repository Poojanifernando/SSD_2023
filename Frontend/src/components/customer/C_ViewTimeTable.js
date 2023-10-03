import React, { Component } from  'react';
import axios from 'axios';
import backgroundImage from '../../img/back2.jpg';
//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default class C_ViewTimeTable extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        timetable: []
      };
    }

    //pdf generator function
      jsPdfGenarator = ()=>{
      var doc = new jsPdf('p','pt');

      doc.text(210,30,"Monthly time table - Fuel dilivery details")
      doc.autoTable({html:'#pdf'})

      doc.autoTable({
        columnStyles:{europe:{halign:'center'}},
        margin:{top:10},
      })
      doc.save("FuelDiliveryTimeTable.pdf");


    }
    
    componentDidMount(){
      this.retrieveFuelReport();
    }
    
    componentDidMount(){
      this.retrievePresentationPanels();
    }
    
    retrievePresentationPanels(){
      axios.get("http://localhost:5000/TimeTables").then(res =>{
        if(res.data.success){
          this.setState({
            timetable:res.data.existingTimeTables
          });
        
          console.log(this.state.timetable)
        }
      });
    }
    
    
   

    filterData(timetable,searchKey){
      const result = timetable.filter((timetable) =>
      timetable.FuelType.toLowerCase().includes(searchKey)
    
      )
    
      this.setState({timetable:result})
    }
    
    handleSearchArea = (e) =>{
      const searchKey = e.currentTarget.value;
    
      axios.get("http://localhost:5000/TimeTables").then(res=>{
        if(res.data.success){
          this.filterData(res.data.existingTimeTables,searchKey)
        }
      });
    }

    

    
  
      render(){
        return (
    
    
    
    
   
                     
         <div style={{ backgroundImage: `url(${backgroundImage})`,   backgroundSize: 'cover'}}>
        <div>
        <br/>
            <div className="col-md-8 mt-4 mx-auto">
           
            <center>        <h1 style={{marginTop:'-50px',marginBottom:'3px', color:'white'}}>This Month Fuel Delivery Time Table</h1></center>
            </div></div>
            <br/>

        <hr/>

        <center>
        <div className="col-lg-9 mt-2 mb-2">
              <input
              className="form-control"
              style={{marginLeft:'-200px'}}
              type="search"
           
              placeholder="search by fuel type"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
            </center>
        
       
            <br/>
            <center>
            <table className = "table table-bordered" id="pdf" style={{backgroundColor:"black"}}>
                <thead>
                    <tr>
                    <th style={{color:'white'}} scope = "col"></th>  
                    <th style={{color:'white'}} scope = "col" >Date</th>
                    <th style={{color:'white'}} scope = "col">Fuel Type</th>
                    <th style={{color:'white'}} scope = "col">Arrival Date</th> 
                    <th style={{color:'white'}} scope = "col"> Start Time</th>  
                    <th style={{color:'white'}} scope = "col"> End Time</th> 
                    <th style={{color:'white'}} scope = "col">MotoBikes</th>
                    <th style={{color:'white'}} scope = "col">Cars</th>  
                    <th style={{color:'white'}} scope = "col">Vans</th>
                    <th style={{color:'white'}} scope = "col">Buses</th> 
                    <th style={{color:'white'}} scope = "col">ThreeWheel</th> 
                    <th style={{color:'white'}} scope = "col">Other</th>
                   
                    </tr>
                </thead>
                <tbody>
    
              {this.state.timetable.map((timetable,index) =>(
                <tr key ={index} style={{color:'#F7DE08'}}>
                  <th scope = "row">{index+1}</th>
                  <td>{timetable.Date}  </td>  
                  <td>{timetable.FuelType}</td>
                  <td>{timetable.ArrivalDate}</td>
                  <td>{timetable.Start}</td>  
                  <td>{timetable.End}</td> 
                  <td>{timetable.MotoBikes}  </td> 
                  <td>{timetable.Cars}</td>  
                  <td>{timetable.Vans}</td> 
                  <td>{timetable.Buses}</td>  
                  <td>{timetable.ThreeWheel}</td> 
                  <td>{timetable.Other}</td> 
               
             
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>

        </center>
        <br/> <br/> <br/> <br/>
        <center>
        <button className="btn btn-warning" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                               color:'blue', width:'500px', height:'70px'}}>
                              <i class="fa-solid fa-download"></i>&nbsp;Download as PDF
        </button>
        </center>
        <br/> <br/>
        </div>
         

 

        
  

        
        )
    }
    
    }


