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
const { cartModel } = require("../models/cartModel");
const courseModel = require("../models/courseModel");


const calcTotalPrice=(cart)=>{
    let price =0;
    cart.cartItems.forEach((item)=>{
        price+=item.price;
    })
    return price;

}

const addToCart=asyncHandler(async(req,res,next)=>{
    const {courseId,quantity}=req.body;
    const course=await courseModel.findById(courseId);
    let cart=await cartModel.findOne({user:req.currentUser._id});
    if(!cart){
        cart =await cartModel.create({
            user:req.currentUser._id,
            cartItems:[{course:courseId,price:course.price,quantity:"1"}]
        })  
    }
    else{
        const courseIndex= cart.cartItems.findIndex((item)=>item.course.toString()==courseId)
        if(courseIndex>-1){

           return next(new apiError(`this coures ${cart._id} has been added to your cart `,400))
        }
      
            cart.cartItems.push({course:courseId,price:course.price,quantity:"1"})
        
    }
    cart.totalPrice=calcTotalPrice(cart)
    cart.totalPriceAfterDiscount=undefined;
    cart.save();
    res.status(200).json({data:cart})

})

const getLoggedUseerCart=asyncHandler(async(req,res,next)=>{
    const cart =await cartModel.findOne({user:req.currentUser._id})
    if(!cart){
        return next(new apiError(`ther is no cart for this user ${req.currentUser.name}`,400));
    }
    res.status(200).json({status:"success",cartCount:cart.cartItems.length,data:cart})
})

const deleteSpesificItem=asyncHandler(async(req,res,next)=>{
    const cart =await cartModel.findOneAndUpdate({user:req.currentUser._id},{
        $pull:{cartItems:{_id:req.params.itemId}}
    },
{new:true})

if(!cart){
    return next(new apiError(`there is no  course for this id ${req.params.cartId}`,400));
}
cart.totalPrice=calcTotalPrice(cart);
cart.save();
res.status(200).json({status:"success",cartCount:cart.cartItems.length,data:cart})

})

const clearCart=asyncHandler(async(req,res,next)=>{
    const cart =await cartModel.findOneAndDelete({user:req.currentUser._id},{new:true});
    res.status(200).json("cart is clear");
})  



module.exports= {addToCart,deleteSpesificItem,getLoggedUseerCart,clearCart}


