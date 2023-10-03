// import mongoose
const mongoose= require("mongoose");

//create db schema to stor the salary data
const EmpSalaryDataSchema = new mongoose.Schema({
    DateForSalary:{
        type:String,
        require:true
    },
    Emp_Name:{
        type:String,
        require:true
    },

    Emp_ID:{
        type:String,
        require:true
    },

    Bank_Account:{
        type:String,
        require:true
    },

    Bank_Name:{
        type:String,
        require:true
    },

    Bank_Branch:{
        type:String,
        require:true
    },

    Emp_Position:{
        type:String,
        require:true
    },

    Working_Days_For_Month:{
        type:Number,
        require:true
    },
    
    Total_Days_For_Month:{
        type:Number,
        require:true
    },

    Basic_Salary:{
        type:Number,
        require:true
    },
    
    Conv_Allowance:{
        type:Number,
        require:true
    },
   
    Performance_Allowance:{
        type:Number,
        require:true
    },
    
    Total_Earning:{
        type:Number,
        require:true
    },


})

module.exports=mongoose.model("Salary_Sheet",EmpSalaryDataSchema);