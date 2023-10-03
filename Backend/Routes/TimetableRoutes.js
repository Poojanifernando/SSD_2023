const express = require('express');
const timetable = require('../Model/Timetable');
const TimeTables = require('../Model/Timetable');

const router = express.Router();

//add Time tables 

router.post('/TimeTables/save',(req,res)=>{

    let newTable = new TimeTables(req.body);

    newTable.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Add time table successfully"
        });
    });
});

//get time table
router.get('/TimeTables',(req ,res) =>{
    TimeTables.find().exec((err,timetable) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingTimeTables:timetable
        });
    });
});

//update the time table

router.put('/TimeTables/update/:id',(req,res)=>{
    TimeTables.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, timetable) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete the time table
router.delete('/TimeTables/delete/:id',(req,res)=>{
    TimeTables.findByIdAndRemove(req.params.id).exec((err,deletedTimeTables) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedTimeTables
        });
    });
});


//get specific time table
router.get(`/TimeTables/:id`,(req,res) =>{
    let TimeTablesId = req.params.id;
    TimeTables.findById(TimeTablesId,(err,timetable)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            timetable
        });
    });
});


module.exports = router;