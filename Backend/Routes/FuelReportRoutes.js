const express = require('express');
const fuelreport = require('../Model/FuelReport');
const FuelReport = require('../Model/FuelReport');

const router = express.Router();

//add Report

router.post('/FuelReport/save',(req,res)=>{

    let newReport = new FuelReport(req.body);

    newReport.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Add report successfully"
        });
    });
});

//get report
router.get('/FuelReport',(req ,res) =>{
    FuelReport.find().exec((err,fuelreport) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingFuelReport:fuelreport
        });
    });
});

//update the report

router.put('/FuelReport/update/:id',(req,res)=>{
    FuelReport.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, fuelreport) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete the report record
router.delete('/FuelReport/delete/:id',(req,res)=>{
    FuelReport.findByIdAndRemove(req.params.id).exec((err,deletedFuelReport) => {

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedFuelReport
        });
    });
});


//get specific time table
router.get(`/FuelReport/getbyid/:id`,(req,res) =>{
    let FuelReportId = req.params.id;
    FuelReport.findById(FuelReportId,(err,fuelreport)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            fuelreport
        });
    });
});


module.exports = router;