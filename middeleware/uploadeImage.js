const multer=require("multer")
const { v4: uuidv4 } = require('uuid');
const apiError = require("../utilts/apiError");

const multerOptions=()=>{
    const multerStorage=multer.memoryStorage();

const multerFilter=(req,file,cb)=>{
      
            
         if(file.mimetype.startsWith("image")){
           
         
            cb(null,true)
        }
        else{

            cb(new apiError("only imaged allowed",400),false)
        }



}

const upload=multer({ storage : multerStorage  ,fileFilter:multerFilter})
return upload;

}


const uploadSingleImage=(fieldName)=>{
      
    return  multerOptions().single(`${fieldName}`)
    
}

const uploadMixedImage= (arrayOfField)=>{
    
    return  multerOptions().fields(arrayOfField)
    
    }

    module.exports={uploadSingleImage,uploadMixedImage}



