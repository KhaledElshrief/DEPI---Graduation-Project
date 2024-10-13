const courseModel = require("../models/courseModel");
const asyncHandler= require("express-async-handler");
const userModel = require("../models/userModel");
const { uploadSingleImage } = require("../middeleware/uploadeImage");
const { v4: uuidv4 } = require('uuid');
const sharp =require("sharp")
const bcrypt=require("bcrypt");
const apiError = require("../utilts/apiError");
const { use } = require("../routes/userRoute");




const uploadImage=uploadSingleImage("image")


const reasizeImage=asyncHandler( async (req,res,next)=>{
    const fileName=`course-${uuidv4()}-${Date.now()}.jpeg`
    if(req.file){
        sharp(req.file.buffer).resize(600,600)
        .toFormat("jpeg")
        .jpeg({quality:90})
        .toFile(`uploads/course/${fileName}`)
        req.body.image=fileName;
    }
    next();
 
 
 
 
 })


 const createCours=asyncHandler(async(req,res,next)=>{
    req.body.user=req.currentUser;
console.log("jj")
    const data=await courseModel.create(req.body);
    if(!data){
        return next(new apiError("there is an error on creating courese",400));
    }
    res.status(200).json({status:"success",data:data});

 })

 const getAllCourses=asyncHandler(async(req,res,next)=>{

    const data=await courseModel.find();
    if(!data){
        return next (new apiError("there is no data on courses",400));
    }
    res.status(200).json({status:"success",length:data.length,data:data});

 })

 const AllCourses  =asyncHandler(async(req,res,next)=>{
    const data=await courseModel.find();
    if(!data){
        return next (new apiError("there is no data on courses",400));
    }
    res.status(200).json({status:"success",length:data.length,data:data});
 })

 const getSpecificData=asyncHandler(async(req,res,next)=>{

    const data =await courseModel.findById(req.params.id);
    if(!data){
        return next(new apiError(`there is no course for this id ${req.params.id}`))
    }
    res.status(200).json({status:"success",data:data})

 })


 const deleteCourse=asyncHandler(async(req,res,next)=>{
    const data =await courseModel.findByIdAndDelete(req.params.id)
    if(!data){
        return next (new apiError(`there is no course for this id ${req.params.id}`,400));
    }
    res.status(200).json({status:"success",message:`course for this id  ${req.params.id} is deleted`});
 })


 const updataCourse=asyncHandler(async(req,res,next)=>{
         
        const data =await courseModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!data){
            return next(new apiError(`there is no course for this id ${req.params.id}`,400));
        }
        data.save();

        res.status(200).json({status:"success",data:data});
 })


 

 module.exports= {getSpecificData,getAllCourses,createCours,reasizeImage,uploadImage,deleteCourse,updataCourse,AllCourses}
 
