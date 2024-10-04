const mongoose=require("mongoose");

const feedbackSchema  = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        required:[true,"user is required"],
    },
    comment:{
        type:String,
        required:[true,"comment is required"],
        
    },
    raiting:{
        type:Number,
        required:[true,"raiting is required "],

    },
    course:{
        type:mongoose.Schema.ObjectId,
        required:[true,"course id is required"]

    }


    
},{timestamps:true})



const  feedbackModel = new mongoose.model("feedback",feedbackSchema);

module.exports=feedbackModel;