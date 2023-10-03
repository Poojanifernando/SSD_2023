import React, { Component } from  'react';
import axios from 'axios';
import backgroundImage from '../../img/anodya2.jpg';

export default class ViewTimeTable extends Component{
    constructor(props){
      super(props);
    
      this.state= {
        timetable: []
      };
    }
    
    componentDidMount(){
      this.retrieveTimetables();
    }
    
    retrieveTimetables(){
      axios.get("http://localhost:5000/TimeTables").then(res =>{
        if(res.data.success){
          this.setState({
            timetable:res.data.existingTimeTables
          });
        
          console.log(this.state.timetable)
        }
      });
    }
    
    
    onDelete = (id) =>{
    
      axios.delete(`http://localhost:5000/TimeTables/delete/${id}`).then((res)=>{
          this.retrieveTimetables();
            
      })
      alert("Delete successfully");
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
    
        <h1 style={{ textAlign:'center',fontSize:"60px", height:'80px', backgroundColor:"#87ceeb", marginTop:'-03px'}}>Fuel Distributed TimeTable</h1>
          
        </div>
        <br/> <br/> <br/>
            

        <button className="btn btn-outline-warning" style={{marginTop:'-100px',fontSize:'17px', width:'200px', height:'70px'}}><a href='/Addtimetable'>Add New Time Table</a></button>
        <br/>
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
            <table className = "table table-bordered" style={{backgroundColor:"black"}}>
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
               
                  <td>
    
                    <br/>
                    <a className="btn btn-outline-warning" style = {{textDecoration:'none',color:'white'}}  href={`/UpdateTimeTable/${timetable._id}`}>
                                &nbsp;Edit
                                </a>
                                &nbsp;
          
                 
                                &nbsp;
                                <a className="btn btn-outline-warning" style = {{textDecoration:'none',color:'white'}}  href="/ViewTimeTable" onClick={()=> this.onDelete(timetable._id)}>
                               &nbsp;Delete
                                </a>

                  
                 
                    
                  </td>
                  
                </tr>
              )
              )}
            </tbody>

           

          
        </table>

        </center>
        <br/>
       

        </div>
         

 

        
  

        
        )
    }
    
    }


