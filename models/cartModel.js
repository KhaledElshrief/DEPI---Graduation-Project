const mongoose=require("mongoose");

const cartSchema= new mongoose.Schema({
    cartItems:[{
        course:{
            type:mongoose.Schema.ObjectId,
            ref:"course",
        },
        price:Number,
       
    }],

    totalPriceAfterDiscount:Number,
    totalPrice:Number,
    user:{
         type:mongoose.Schema.ObjectId,
          ref:"user" 
    }
},{timestamps:true});


const cartModel=new mongoose.model("cart",cartSchema);

module.exports={cartModel}
