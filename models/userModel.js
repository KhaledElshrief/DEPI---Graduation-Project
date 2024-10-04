const mongoose=require("mongoose");
const { type } = require("os");
const { boolean } = require("webidl-conversions");

userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    phone:{
        type:Number,
        required:[true,"phone is required"]
    },
    profileImage:String,
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[6,"too short number of password"]
    },
    role:{
        type:String,
        enum:["user","admin","teacher","Institution"],
        default:"user",    
    },

    active:{
        type:String,
        default:true,
    },

    address:{
        type:String,

    },

    contactInfo:{
        type:String,
    },
    passwordResetCode:String,
    passwordResetExpires:Date,
    passwordResetVerified:Boolean,
    

})

const setImgageUrl=(doc)=>{
    if(doc.profileImage){
      
        const imageUrl=`${process.env.BASE_URL}/user/${doc.profileImage}`
        doc.profileImage=imageUrl;
    }
}
userSchema.post('init', function(doc) {
    
   
   setImgageUrl(doc);

  });

  userSchema.post('save', function(doc) {
   
    setImgageUrl(doc);
    
   });

const userModel= mongoose.model("user",userSchema);

module.exports=userModel;




