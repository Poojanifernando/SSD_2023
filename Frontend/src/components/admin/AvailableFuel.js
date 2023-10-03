//import reat and react component from react
import React, { Component } from 'react'

//import axios
import axios from 'axios'

//import backgroud picture
import BgAdmin2 from '../../img/backpic.jpg';


export default class AdminViewAllStock extends Component {

    //initialize constructor to pass the props
    constructor (props) {
        super(props);
        this.state={
        //initializing an array 
        GetAllStock:[]
        };
        
    }
    
    

    //calling the method after componenets render to the page
    componentDidMount(){
        this.retrieveFuelDetails();
    }


    //get request method
    retrieveFuelDetails(){
        axios.get("http://localhost:5000/GetAllStock").then(res=>{
        console.log(res.data);
        
        //if the request success, store the data to the array 
        if(res.data.success){
            this.setState({
                GetAllStock:res.data.existingData
            });
                
                
        }
        })
    }

   


  render() {
    return (
      <div>


      <div style={{height:'80px', backgroundColor:"#C5CAE9", marginTop:'-20px'}}>
        <br/><br/>

        <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>Fuel Information</h1>
        
        <div style={{height:'80px', backgroundColor:"#7986CB", marginTop:'-50px'}}></div>
        </div>
        <div style={{ marginTop: '54px',  backgroundImage: `url(${BgAdmin2})`,   backgroundSize: 'cover'}}>  
        <br/>


      
           
<div id="content">
<table className='tableSalary' style={{width:"1000px", marginLeft:"100px", marginTop:'50px', background:"rgba(90,90,120,0.45)"}} >
  
      <table className="table table-borderless"  style={{marginTop:'50px',  marginLeft:'50px', width:'1200px',color:'white'}}>
          <thead style={{fontSize:'20px',color:'white'}}>
            <tr style={{fontSize:'20px', color:'white'}}>
                <th scope="col"><h2>Petrol</h2></th>

                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllStock.map((GetAllStock,index)=>(
            <tr key ={index}>
              {/* <th scope='row'>{index+1}</th> */}
              
              
              <td style={{fontSize:'40px',color:'white'}}><h4>Octane 92 -   {GetAllStock.p92} l</h4></td>
              <td style={{fontSize:'40px',color:'white'}}><h4>Octane 95 -   {GetAllStock.p95} l</h4></td>

              <br/>
                      
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

      <table className="table table-borderless"  style={{marginTop:'50px',  marginLeft:'50px', width:'1200px',color:'white'}}>
          <thead style={{fontSize:'40px',color:'white'}}>
            <tr style={{fontSize:'40px',color:'white'}}>
                <th scope="col"><h2>Diesel</h2></th>
                
                
            </tr>
          </thead>
          
          <tbody>

            {this.state.GetAllStock.map((GetAllStock,index)=>(
            <tr key ={index}>
              {/* <th scope='row'>{index+1}</th> */}
              
              
              <td style={{fontSize:'20px',color:'white'}}><h4>Super Diesel -  {GetAllStock.superd} l</h4></td>
              <td style={{fontSize:'20px',color:'white', marginLeft:'-100px'}}><h4>Auto Diesel -   {GetAllStock.autod} l</h4></td> 
              
                           
            </tr>

            
            
                ))} 

                    
          </tbody>
                    


      </table>

      <table style={{marginTop:'50px',  marginLeft:'200px', width:'1300px',color:'white'}}>
          <thead>
            <tr style={{fontSize:'20px', pattern:"(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"}}>
                <th scope="col"><h3>Modified Date</h3></th>
                
                
            </tr>
          </thead>
          
          <tbody >

            {this.state.GetAllStock.map((GetAllStock,index)=>(
            <tr key ={index}>
              {/* <th scope='row'>{index+1}</th> */}
              
            
              <td style={{fontSize:'20px', pattern:"(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"}}><h4>{GetAllStock.mdate}</h4></td> 

                        <a className ="btn btn-warning" href={`/stock/${GetAllStock._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;<h4>Update Stock</h4>
                            </a>
                          
                            <br/>
                           
            </tr>

            
            
                ))} 

                    
          </tbody>
                    
<br/>

      </table>
</table>
     
      </div>
      <br/><br/><br/><br/>
</div>
</div>

    )

  }
}

