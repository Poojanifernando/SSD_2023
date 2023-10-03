//import reat and react component from react
import React, { Component } from 'react'

//import axios
import axios from 'axios'
// import Html from 'react-pdf-html';

//import pdf generator
import jsPdf from 'jspdf'
import 'jspdf-autotable'


export default class AdminViewAllFuel extends Component {

    //initialize constructor to pass the props
    constructor (props) {
        super(props);
        this.state={
        //initializing an array 
        GetAllFuel:[]
        };
        
    }
    
    //pdf generator function
    jsPdfGenarator = ()=>{
      var doc = new jsPdf('p','pt');

      doc.text(210,30,"Monthly Report - Fuel")
      doc.autoTable({html:'#pdf'})

      doc.autoTable({
        columnStyles:{europe:{halign:'center'}},
        margin:{top:10},
      })


    doc.save("Report.pdf");


    }

    //calling the method after componenets render to the page
    componentDidMount(){
        this.retrieveFuelDetails();
    }


    //get request method
    retrieveFuelDetails(){
        axios.get("http://localhost:5000/GetAll").then(res=>{
        console.log(res.data);
        
        //if the request success, store the data to the array 
        if(res.data.success){
            this.setState({
                GetAllFuel:res.data.existingData
            });
                
                
        }
        })
    }

    //delete function

    onDelete = (id)=>{
        axios.delete(`http://localhost:5000/Delete/${id}`).then((res)=>{
        this.retrieveFuelDetails();
        })
        alert("Deleted succesfully");
    } 


//search data according to the shift and date
        
        
filterData(GetAllFuel,searchKey){

  
    const result =GetAllFuel.filter((FuelData)=>
   
    FuelData.Fname.includes(searchKey)
    )
  
  this.setState({GetAllFuel:result})
  
  }
  
  handleSearchArea=(e)=>{
  
    const searchKey = e.currentTarget.value;
    
    axios.get("http://localhost:5000/GetAll").then(res=>{
    if(res.data.success){
    
      this.filterData(res.data.existingData,searchKey)
    }
  });
  
  }


  render() {
    return (
      <div>


      <div style={{height:'80px', backgroundColor:"#00bfff", marginTop:'-20px'}}>
        <br/><br/>

        <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>Fuel Stock Information</h1>
        
        <div style={{height:'80px', backgroundColor:"#87ceeb", marginTop:'-50px'}}></div>
        </div>
        <br/> <br/> <br/><br/>

        <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px',marginLeft:'170px' }}>
      
          <input
          className="form-control" style={{marginTop:'100px',padding:'10px 50px', marginRight:'1150px'}}
          type="search"
          placeholder="Search By The Type Of Fuel"
          name="searchQuery"
          onChange={this.handleSearchArea}>
            </input>
            
            &nbsp;<button className="btn btn-success" onClick={this.jsPdfGenarator} style={{ fontSize:'17px',
                              marginLeft:'900px', width:'300px', height:'80px', marginTop:'-100px'}} >
                              <i class="fa-solid fa-download"></i>&nbsp;Generate Monthly Report
            </button>


      </div>

      <br/>      
              
<div id="content">
      <table className="table table-hover" id="pdf" style={{marginTop:'50px',  marginLeft:'120px', width:'1500px'}}>
          <thead>
            <tr style={{fontSize:'20px'}}>
                <th scope="col">No</th>
                <th scope="col">Date Received</th>
                <th scope="col">Fuel Name</th>
                <th scope="col">Amount(l)</th>
                <th scope="col">Fuel Type</th>
                <th scope="col">Price per Litre(Rs)</th>
                <th scope="col"></th>
                <th scope="col"></th>
                

                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllFuel.map((GetAllFuel,index)=>(
            <tr key ={index}>
              <th scope='row'>{index+1}</th>
              <td>{GetAllFuel.Date}</td>
              <td>{GetAllFuel.Fname}</td>
              <td>{GetAllFuel.amount}</td>
              <td>{GetAllFuel.Ftype}</td> 
              <td>{GetAllFuel.price}</td> 

              <td>
                        <a className ="btn btn-warning" href={`/${GetAllFuel._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllFuel._id)}>
                            <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                            </a>  &nbsp;

                        </td>
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

     
      </div>
     
</div>
    )

  }
}

