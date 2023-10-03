//import express
const express =require("express")

//import models
const stockAdd = require("../Model/Stock");

//Declare express routers to connect with functions
const router=express.Router();

//Add data

router.post('/stock/Save',(req,res)=>{
    let newStock= new stockAdd(req.body);

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

router.get("/GetAllStock",(req,res)=>{
        stockAdd.find().exec((err,GetAll)=>{
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

router.get("/GetOneStock/:id",(req,res)=>{
    let ReqID= req.params.id;

    stockAdd.findById(ReqID,(err,Onedata)=>{
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

router.put("/UpdateStock/:id",(req,res)=>{
    stockAdd.findByIdAndUpdate(
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

router.delete("/DeleteStock/:id", (req,res)=>{
    stockAdd.findByIdAndRemove(req.params.id).exec((err,deletedData)=>{
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





