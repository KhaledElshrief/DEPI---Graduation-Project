 const express=require("express");
 const app =new express();
 const dotenv=require("dotenv");
const apiError = require("./utilts/apiError");
const globalError = require("./middeleware/globalError");
const mainRoute = require("./routes/mainRoute");
const dbConnection = require("./config/dbConnetions");
const path = require("path");
const bodyParser = require('body-parser')




app.use(express.static(path.join(__dirname,"uploads")))

app.use(bodyParser.urlencoded({ extended: false })) 

dotenv.config({path:"config.env"})
app.use(express.json())
dbConnection();


 app.listen(process.env.PORT,()=>{
    console.log(`app listen on port ${process.env.PORT}`)
 })

mainRoute(app);

app.use("*",(req,res,next)=>{
    next (new apiError(`cant find this url ${req.originalUrl}`,400)) 
})

 app.use(globalError);


 