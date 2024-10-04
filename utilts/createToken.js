const jwt=require("jsonwebtoken");
const createToken=(payload)=>{
    const token=jwt.sign({userId:payload},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPITE_TIME
    });
    return  token;
}


module.exports=createToken;



