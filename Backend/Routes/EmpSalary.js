//import express 
const express = require("express")

//import models
const EmpSalarySheet = require("../Model/EmpSalary");

//declare an express route to connect with the APIs
const router = express.Router();

//create salary sheet 
router.post("/EmpSalary/Save", (req,res)=>{
    let newEmpSalarySheet= new EmpSalarySheet(req.body);

    newEmpSalarySheet.save((err)=>{
        if(err){
            //the HTTP code returned from the server
            return res.status(400).json ({
                error:err
            });
        }

        return res.status(200).json({
            success:"Salary Sheet Created Successfully"
        });
    });

});

//get All salary Sheet
router.get("/GetAllSalarySheets",(req,res)=>{
    EmpSalarySheet.find().exec((err,GetAllReq)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingData:GetAllReq
        });
    });
});

//get One Salary Sheet

router.get("/GetOneSalrySheet/:id",(req,res)=>{
    let SalID = req.params.id;

    EmpSalarySheet.findById(SalID,(err,OneSalarySheet)=>{
        if(err){
            return res.status(400).json({
                success:false.valueOf,
                err
            })
        }
        return res.status(200).json({
            success:true,
            OneSalarySheet
        });
    });
});

//update the salary sheet
router.put("/UpdateSalarySheet/:id",(req,res)=>{
    EmpSalarySheet.findByIdAndUpdate(req.params.id, {$set:req.body},
        (err,updateReq)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }); 
    
});

//delete salary sheet
router.delete("/DeleteSalarySheet/:id", (req,res)=>{
    EmpSalarySheet.findByIdAndDelete
    (req.params.id).exec((err,deleteReq)=>{
        if(err){
            return res.status(400).json({
                message:"Deleting Failed",err
            });
        }
        return res.json({
            message:"Delete Successfull",deleteReq
        });
    });
});


module.exports=router;
