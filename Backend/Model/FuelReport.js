const mongoose = require('mongoose');

const FuelReportSchema = new mongoose.Schema({

    RefID:{
    type:String,
    required:true
    },

    FuelType:{
    type:String,
    required:true
        },
    

    Rdate:{
    type:String,
    required:true
    },

    Ramount:{
    type:String,
    required:true
    },

    MotoBikes:{
    type:String,
    required:true
    },

    Cars:{
    type:String,
    required:true
    },

    ThreeWheel:{
    type:String,
    required:true
    },

    Buses:{
    type:String,
    required:true
    },

    Vans:{
    type:String,
    required:true
    },

    Other:{
    type:String,
    required:true
    },

    TotalAmount:{
    type:String,
    required:true
    },

    Oct92:{
    type:String,
    required:true
    },

    Oct95:{
    type:String,
    required:true
    },

    Diesal:{
    type:String,
    required:true
    },

    Remaintot:{
    type:String,
    required:true
    },
    

 


});

module.exports = mongoose.model('FuelReport',FuelReportSchema);
