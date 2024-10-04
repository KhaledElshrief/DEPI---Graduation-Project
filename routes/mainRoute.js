const userRoute =require("./userRoute.js")
const authRoute=require("./authRoute.js")
const courseRoute=require("./courseRoute")
const feedbackRoute =require("./feedbackRoute")


const mainRoute=(app)=>{

    app.use("/user",userRoute)
    app.use("/auth",authRoute)
    app.use("/course",courseRoute)
    app.use("/feedback",feedbackRoute)
    
   
}

module.exports=mainRoute;