const mongoose=require("mongoose");

const coureSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"],
        maxLength:[20,"to long title "],
        minLenth:[3,"to short title"],
    },
    image:{
        type:String,
        required:[true,"image is required"],

    },

    description:{
        type:String,
        required:[true,"description is required"],
        maxLength:[100,"too long description"],
        minLenth:[6,"too short description"],


    },
    level:{
        type:String,
        required:[true,"level is required"],
        default:"A",

    },
    price:{
        type:Number,
        required:[true,"price is required"],

    },
    status:{
        type:String,
        default:"active",

    },
    language:{
        type:String,
        required:[true,"language is required"],

    },
    // category:{
    //     type:String,
    //     require:[true,"category is required"],


    // },
    user:{
        type:mongoose.Schema.ObjectId,
        required:[true,"user is required"]
    },
    discount:{
        type:Number
    },
    

})

setImageUrl=(doc)=>{
    if(doc.image){

        const imageUrl=`${process.env.BASE_URL}/course/${doc.image}`
        doc.image=imageUrl
    }
}

coureSchema.post("init",(doc)=>{
    setImageUrl(doc)
})

coureSchema.post("save",(doc)=>{

    setImageUrl(doc)

})

const courseModel= new mongoose.model("course",coureSchema);

module.exports=courseModel;



