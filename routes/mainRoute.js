const userRoute =require("./userRoute.js")
const authRoute=require("./authRoute.js")
const courseRoute=require("./courseRoute")
const feedbackRoute =require("./feedbackRoute")
const cartRoute=require("./cartRoute.js")


const mainRoute=(app)=>{

    app.use("/user",userRoute)
    app.use("/auth",authRoute)
    app.use("/course",courseRoute)
    app.use("/feedback",feedbackRoute)
    app.use("/cart",cartRoute)
    
   
}

module.exports=mainRoute;