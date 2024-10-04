const courseModel = require("../models/courseModel");
const asyncHandler= require("express-async-handler");
const userModel = require("../models/userModel");
const { uploadSingleImage } = require("../middeleware/uploadeImage");
const { v4: uuidv4 } = require('uuid');
const sharp =require("sharp")
const bcrypt=require("bcrypt");
const apiError = require("../utilts/apiError");
const { use, route } = require("../routes/userRoute");
const feedbackModel = require("../models/feedbackModel");


const createFeedback=asyncHandler(async(req,res,next)=>{
    req.body.user=req.currentUser;
    const data=await feedbackModel.create(req.body);
    if(!data){
        return next(new apiError("there is an error on creating feedback",400));
    }
    res.status(200).json({status:"success",data:data});
})


const getAllFeedback=asyncHandler(async(req,res,next)=>{
    const data=await feedbackModel.find();
    if(!data){
        return next(new apiError("there is no data ",400))
    }
    res.status(200).json({status:"success",length:data.length,data:data});
})

const getSpecificFeedback=asyncHandler(async(req,res,next)=>{


    const data=await feedbackModel.findById(req.params.id);

    if(!data){
        return next(new apiError(`there is no data for this id ${req.params.id}`,400));
    }

    res.status(200).json({status:"success",data:data});

})

const deleteFeedback=asyncHandler(async(req,res,next)=>{
    const data=await feedbackModel.findByIdAndDelete(req.params.id);
    if(!data){
        return next (new apiError(`there is no review for this id ${req.params.id}`,400));
    }
    res.status(200).json({status:"success",message:`feedback for this id ${req.params.id} is deleted`});

})

const updateFeedback=asyncHandler(async(req,res,next)=>{
    const data=await feedbackModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!data){
        return next(new apiError(`there is no feedback for this id ${req.params.id}`,400));
    }
    res.status(200).json({status:"success",data:data});

})


module.exports= {updateFeedback,deleteFeedback,getSpecificFeedback,getAllFeedback,createFeedback}   
