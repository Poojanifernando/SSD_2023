//import mongoose
const mongoose = require("mongoose");

//create db schema to store data
const FuelSchema = new mongoose.Schema({
    p92:{
        type:String,
        require:true
    },
     
    p95:{
        type:String,
        require:true
    },

    superd:{
        type:String,
        require:true
    },

    autod:{
        type:String,
        require:true
    },
    mdate:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("Fuel",FuelSchema);