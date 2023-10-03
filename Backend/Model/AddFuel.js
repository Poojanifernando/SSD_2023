//import mongoose
const mongoose = require("mongoose");

//create db schema to store data
const FuelAddSchema = new mongoose.Schema({
    Date:{
        type:String,
        require:true
    },
     
    amount:{
        type:String,
        require:true
    },

    Fname:{
        type:String,
        require:true
    },

    Ftype:{
        type:String,
        require:true
    },

    price:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("AddFuel",FuelAddSchema);