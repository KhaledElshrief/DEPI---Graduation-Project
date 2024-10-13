const userModel = require("../models/userModel");
const createToken = require("../utilts/createToken");
const asyncHandler= require("express-async-handler");
const bcryp=require("bcrypt");
const apiError = require("../utilts/apiError");
const { v4: uuidv4 } = require('uuid');
const sharp =require("sharp")
const { uploadSingleImage } = require("../middeleware/uploadeImage");
const jwt =require("jsonwebtoken")
const  crypto = require('crypto');
const { sendEmail } = require("../utilts/sendMail");



const uploadImage=uploadSingleImage("profileImage")


const reasizeImage=asyncHandler( async (req,res,next)=>{
    const fileName=`user-${uuidv4()}-${Date.now()}.jpeg`
    if(req.file){
        sharp(req.file.buffer).resize(600,600)
        .toFormat("jpeg")
        .jpeg({quality:90})
        .toFile(`uploads/user/${fileName}`)
        req.body.profileImage=fileName;
    }



    next();
 
 
 
 
 })


const signup=asyncHandler(async(req,res,next)=>{
    if(req.body.password){
        req.body.password=await bcryp.hash(req.body.password,12);
    }
    const user=await userModel.create(req.body);

    if(!user){

        return next(new apiError("there is an error on sign up ",400));
    }
    const token =createToken(user._id)
    res.status(200).json({status:"success",data:user,token:token})

})


const login=asyncHandler(async(req,res,next)=>{
    const user=await userModel.findOne({email:req.body.email})
  
    if(!user||!(await bcryp.compare(req.body.password,user.password))){
        return next(new apiError("email or password are not correct",400))
    }
    const token=createToken(user._id);

    res.status(200).json({status:"success",data:user,token:token})

})


const protect=asyncHandler(async(req,res,next)=>{
    
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
        token =req.headers.authorization.split(" ")[1];
       
    }
    if(!token){
        return next(new apiError("you are not logged in ",400));
    }
    const decoded=  jwt.verify(token,process.env.JWT_SECRET_KEY)
    const user =await userModel.findById(decoded.userId);
    if(!user){
        return next (new apiError("user is no longer exxist",400))
    }

    req.currentUser=user
    next();

  
})


const allowedTo=(...roles)=>{
    return asyncHandler(async(req,res,next)=>{
      
        if(!roles.includes(req.currentUser.role)){
            return next(new apiError("you are not allowed to access this route ",400))

        }
        next();
    })
}

 const forgetPassword=asyncHandler(async(req,res,next)=>{
    const user=await userModel.findOne({email:req.body.email})
    if(!user){
        return next (new apiError(`there is no user for this email ${req.body.email}`,400));

    }
    const resetCode=Math.floor(Math.random()*899999 +100000).toString();
    const hashCode=await  crypto
    .createHash('md5')
    .update(resetCode)
    .digest('hex');

    user.passwordResetCode=hashCode;
    user.passwordResetExpires =Date.now()+10*60*1000;
    user.passwordResetVerified=false
    user.save();

    const message=`hi ${user.name} 
    you recieve resetcode
     ${resetCode}`;

     try{
        await sendEmail({email:user.email,
            subject:`your passwordReset valid to only 10m `,
            message:message
        })
     }
     catch(err){
        user.passwordResetCode=undefined;
        user.passwordResetExpires =undefined
        user.passwordResetVerified=undefined
        user.save();
        return next(new apiError("there is an error on sending an email" +err))


     }

     res.json({status:"success",message:"you send an emil"})




 })


  const verifyResetCode=asyncHandler(async(req,res,next)=>{
    const hashCode=await  crypto
    .createHash('md5')
    .update(req.body.resetCode)
    .digest('hex');
    
    const user =await userModel.findOne({
        passwordResetCode:hashCode,
        passwordResetExpires:{$gt:Date.now()}
    })

    if(!user){
        return next(new apiError(" الكود غير صحيح او منتهى الصلاحيه "))
    }
    user.passwordResetVerified=true,
    await user.save();
    res.status(200).json({message:"success"});
  })

  const resetPassword=asyncHandler(async(req,res,next)=>{
   
    const user=await userModel.findOne({
        email:req.body.email
    });
    if(!user){
        return next(new apiError(`there is no user for this email ${req.body.email}`));
    };
    if(!user.passwordResetVerified){
        return next (new apiError(`resetCode is not verifyied`))
    }
    if(req.body.password){
        req.body.password=await bcryp.hash(req.body.password,12);
    }


    user.password=req.body.password;
        user.passwordResetCode=undefined;
        user.passwordChangedAt=undefined;
        user.passwordResetVerified=undefined;
        await user.save();
        const token= createToken(user._id);
        res.status(200).json({token:token})

  })


module.exports= {signup,reasizeImage,uploadImage,login,protect,allowedTo,forgetPassword,verifyResetCode,resetPassword}

