import React, { Component } from 'react'
//import axios
import axios from 'axios'

//import backgroud picture
import BgAdmin4 from '../../img/BgAdmin4.jpeg';

export default class AdminCheckAttendance extends Component {



//initialize constructor to pass the props
constructor (props) {
    super(props);
    this.state={
      //initializing an array 
      GetAllAtt:[]
    };
  }


 //calling the method after componenets render to the page
 componentDidMount(){
    this.retrieveAttDetalis();
  }

 //get request method
 retrieveAttDetalis(){
    axios.get("http://localhost:5000/GetAllAttendance").then(res=>{
      console.log(res.data);
      
    //if the request success, store the data to the array 
      if(res.data.success){
        this.setState({
          GetAllAtt:res.data.existingData
        });
             
             
       }
    })
}

 //delete function

 onDelete = (id)=>{
  axios.delete(`http://localhost:5000/DeleteAttendance/${id}`).then((res)=>{
    this.retrieveAttDetalis();
  })
  alert("Deleted succesfully");
} 


//search data according to the shift,date,Name and ID

filterData(GetAllAtt,searchKey){
  const result =GetAllAtt.filter((AttData)=>
  AttData.Shift.toLowerCase().includes(searchKey) ||
  AttData.Shift.includes(searchKey)||
  AttData.Emp_Name.toLowerCase().includes(searchKey) ||
  AttData.Emp_Name.includes(searchKey)||
  AttData.Date.includes(searchKey)||
  AttData.Emp_ID.includes(searchKey)||
  AttData.Month.toLowerCase().includes(searchKey)||
  AttData.Month.includes(searchKey)
  )

this.setState({GetAllAtt:result})

}

handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:5000/GetAllAttendance").then(res=>{
  if(res.data.success){
  
    this.filterData(res.data.existingData,searchKey)
  }
});

}



  render() {
    return (
        <div>


        <div style={{height:'80px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
          <br/><br/>

          <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>ATTENDANCE LIST- Admin</h1>
          
          <div style={{height:'80px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>
          </div>
          <br/> <br/> <br/>

          <div style={{backgroundImage: `url(${BgAdmin4})`,   backgroundSize: 'cover'}} >
          <button className="btn btn-success" 
            style={{padding:'8px 8px',backgroundColor:'#3895d3', marginLeft:'50px', marginTop:'20px'}}>
            <a href="/AdminViewSalary" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
            <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
          </button>


          <div className="col-lg-3 my-2 mb-2" style={{marginTop:'10px', marginLeft:'170px'}}>
        
        <table className='serchclass'>
          <tr>
            <td>
              <input
              className="form-control" style={{marginTop:'100px',padding:'10px 50px', width:'350px'}}
              type="search"
              placeholder="Search Here..."
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
      
              <br></br>
              <p style={{color:"white",textShadow: '1px 2px 5px black'}}> *Enter The Shift/Name/ID You Want To Find</p>
            </td>

            <td>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            </td>

            <td>
              <input
              className="form-control" style={{marginTop:'100px',padding:'10px 50px', width:'350px'}}
              type="search"
              placeholder="Search Here..."
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
      
              <br></br>
              <p style={{color:"white",textShadow: '1px 2px 5px black'}}> *Enter The Month/Date You Want To Find</p>
           </td>
          </tr>
          </table>
          </div>
          <br/>     
              

          <table className="table table-hover" style={{marginTop:'50px',  marginLeft:'170px', width:'1300px'}}>
                  <thead>
                    <tr style={{fontSize:'20px'}}>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>NO</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Employee Name</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Employee ID</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Date</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Month</th>
                        <th scope="col" style={{color:"white",textShadow: '1px 2px 5px black'}}>Shift</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                        {/* <th scope="col">Time in</th>
                        <th scope="col">Time_Out</th> */}
                        {/* <th scope="col">Total_Hours_per_Day</th>
                        <th scope="col">Total_Hours_per_Month</th> */}

                        
                    </tr>
                  </thead>
                  
                  <tbody>

                    {this.state.GetAllAtt.map((GetAllAtt,index)=>(
                    <tr key ={index} >
                      <th scope='row' style={{color:"white",textShadow: '1px 2px 5px black'}}>{index+1}</th>
                        <td style={{color:"white",textShadow: '1px 2px 5px black'}}>{GetAllAtt.Emp_Name}</td>
                        <td style={{color:"white",textShadow: '1px 2px 5px black'}}>{GetAllAtt.Emp_ID}</td> 
                        <td style={{textShadow: '1px 2px 5px black'}}><u><a  href={`AdminCheckAttOne/${GetAllAtt._id}`} style={{textDecoration:'none', color:'white', }}>
                            {GetAllAtt.Date}
                            </a></u>
                        </td> 
                        <td style={{color:"white",textShadow: '1px 2px 5px black'}}>{GetAllAtt.Month}</td> 
                        <td style={{color:"white",textShadow: '1px 2px 5px black'}}>{GetAllAtt.Shift}</td> 
                      


                        
                        <td>
                            <a className ="btn btn-danger" href="" onClick={()=>this.onDelete(GetAllAtt._id)}>
                            <i className ="far fa-trash-alt"> </i>&nbsp;Delete
                            </a>  &nbsp;
                        </td>
                    </tr>

                    
                    
                        ))} 

                  </tbody>


              </table>
              <br/>
              </div>

</div>
    )
  }
}
