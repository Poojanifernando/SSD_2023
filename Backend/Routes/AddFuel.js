//import express
const express =require("express")

//import models
const FuelAdd = require("../Model/AddFuel");

//Declare express routers to connect with functions
const router=express.Router();

//Add data

router.post('/Fuel/Save',(req,res)=>{
    let newStock= new FuelAdd(req.body);

    newStock.save((err)=>{

        if(err){
        return res.status(400).json({
            error:err
        });
        }
        return res.status(200).json({
            success:"Data added Successfully"
        });
    });
});


//get all l

router.get("/GetAll",(req,res)=>{
        FuelAdd.find().exec((err,GetAll)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingData:GetAll
        });
    });
});

//get one 

router.get("/GetOne/:id",(req,res)=>{
    let ReqID= req.params.id;

    FuelAdd.findById(ReqID,(err,Onedata)=>{
        if(err){
            return res.status(400).json({
                success:false,
                err
            })
        }

        return res.status(200).json({
            success:true,
            Onedata
        });
    });

});

//update record

router.put("/Update/:id",(req,res)=>{
    FuelAdd.findByIdAndUpdate(
        req.params.id, {$set:req.body},
    (err,update)=>{
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

//delete 

router.delete("/Delete/:id", (req,res)=>{
    FuelAdd.findByIdAndRemove(req.params.id).exec((err,deletedData)=>{
        if(err){
            return res.status(400).json({
                message:"Delete was unsuccessful",err
            });
            
        }
        return res.json({
            message:"Deleted Successfully",deletedData
        });
    });
});

module.exports=router;





