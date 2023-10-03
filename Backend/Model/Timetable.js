const mongoose = require('mongoose');

const TimetableSchema = new mongoose.Schema({

    Date:{
    type:String,
    required:true
    },

    FuelType:{
    type:String,
    required:true
    },

    ArrivalDate:{
    type:String,
    required:true
    },

    Start:{
    type:String,
    required:true
    },

    End:{
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

    Vans:{
    type:String,
    required:true
    },

    Buses:{
    type:String,
    required:true
    },

    ThreeWheel:{
    type:String,
    required:true
    },

    Other:{
    type:String,
    required:true
    }
    

 


});

module.exports = mongoose.model('Timetable',TimetableSchema);